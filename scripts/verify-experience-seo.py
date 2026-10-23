"""Check the served HTML, not just source metadata.

python scripts/verify-experience-seo.py http://localhost:3000
python scripts/verify-experience-seo.py https://ujjwaluzu.in --external
Requires only Python's standard library. Never submits forms or search-engine requests.
"""
import json
import sys
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit

ORIGIN = "https://ujjwaluzu.in"
BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000").rstrip("/")
PARENT = "/experience/intelligencex"
BRANDS = {"xrepai": "XrepAI", "aiptx": "AIPTx", "cspmx": "CSPMX"}


class Document(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.meta, self.links, self.anchors, self.images = [], [], [], []
        self.headings, self.schemas, self.text = [], [], []
        self.capture, self.buffer, self.script_type = None, [], None
        self.in_script = False
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta": self.meta.append(attrs)
        if tag == "link": self.links.append(attrs)
        if tag == "a" and attrs.get("href"): self.anchors.append(attrs["href"])
        if tag == "img": self.images.append(attrs)
        if tag in ("title", "h1", "h2", "h3"):
            self.capture, self.buffer = tag, []
        if tag == "script":
            self.in_script, self.script_type, self.script_buffer = True, attrs.get("type"), []

    def handle_data(self, data):
        if self.in_script:
            self.script_buffer.append(data)
        else:
            self.text.append(data)
            if self.capture: self.buffer.append(data)

    def handle_endtag(self, tag):
        if tag == self.capture:
            self.headings.append((tag, "".join(self.buffer)))
            self.capture = None
        if tag == "script":
            if self.script_type == "application/ld+json":
                self.schemas.append(json.loads("".join(self.script_buffer)))
            self.in_script = False

    def metadata(self, key):
        return [m["content"] for m in self.meta if m.get("name", m.get("property")) == key]


def fetch(url):
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Portfolio SEO verification)"})
    with urllib.request.urlopen(request, timeout=40) as response:
        return response.status, response.url, dict(response.headers), response.read()


def page(path):
    status, final, headers, body = fetch(BASE + path)
    assert status == 200 and final == BASE + path, f"Unexpected redirect/status: {path} -> {final} ({status})"
    assert "noindex" not in next((v.lower() for k, v in headers.items() if k.lower() == "x-robots-tag"), "")
    return Document(body.decode()), headers


reports, titles, descriptions, external, internal, assets = [], set(), set(), set(), set(), set()
parent, _ = page(PARENT)
for slug, brand in BRANDS.items():
    path = f"{PARENT}/{slug}"
    canonical = ORIGIN + path
    doc, headers = page(path)
    title = [text for tag, text in doc.headings if tag == "title"]
    h1 = [text for tag, text in doc.headings if tag == "h1"]
    description = doc.metadata("description")
    assert len(title) == len(h1) == len(description) == 1, f"Duplicate/missing title, H1 or description: {slug}"
    assert title[0].startswith(brand) and h1[0].startswith(brand)
    assert title[0] not in titles and description[0] not in descriptions, "Duplicate page metadata"
    titles.add(title[0]); descriptions.add(description[0])
    assert [link["href"] for link in doc.links if link.get("rel") == "canonical"] == [canonical]
    assert doc.metadata("og:url") == [canonical]
    assert doc.metadata("og:title") == doc.metadata("twitter:title") == title
    assert doc.metadata("og:description") == doc.metadata("twitter:description") == description
    assert doc.metadata("twitter:card") == ["summary_large_image"]
    assert doc.metadata("og:image:width") == ["1200"] and doc.metadata("og:image:height") == ["630"]
    assert doc.metadata("og:image") == doc.metadata("twitter:image")
    assert len(doc.metadata("og:image:alt")) == len(doc.metadata("twitter:image:alt")) == 1
    assets.update(doc.metadata("og:image"))
    assert doc.metadata("robots") == ["index, follow"]
    assert not doc.metadata("keywords"), "Inherited meta keywords should be cleared"
    visible_text = " ".join(doc.text)
    assert "My contributions" in visible_text and "Ujjwal" in visible_text
    assert "Official product references" in visible_text
    assert path in parent.anchors, f"Missing parent link: {slug}"
    for target in ["/", "/experience", PARENT] + [f"{PARENT}/{s}" for s in BRANDS if s != slug]:
        assert target in doc.anchors, f"Missing hierarchy/related link: {target}"
        internal.add(target)
    graph = [entity for schema in doc.schemas for entity in schema.get("@graph", [])]
    ids = [entity["@id"] for entity in graph if "@id" in entity]
    assert len(ids) == len(set(ids)), "Duplicate schema entities"
    webpage = next(entity for entity in graph if entity["@type"] == "WebPage")
    assert webpage["url"] == canonical and webpage["@id"] == canonical + "#webpage"
    assert webpage["author"]["@id"] == ORIGIN + "/#ujjwal-baunthiyal"
    assert any(e.get("@id") == webpage["isPartOf"]["@id"] for e in graph)
    assert webpage["about"]["name"] == brand
    assert webpage["about"]["url"] in doc.anchors
    assert all(source in doc.anchors for source in webpage["citation"])
    breadcrumbs = next(e for e in graph if e["@type"] == "BreadcrumbList")
    assert breadcrumbs["@id"] == webpage["breadcrumb"]["@id"]
    assert [i["position"] for i in breadcrumbs["itemListElement"]] == [1, 2, 3, 4]
    assert breadcrumbs["itemListElement"][-1]["item"] == canonical
    assert all("alt" in img and img.get("width") and img.get("height") for img in doc.images)
    assets.update(urljoin(BASE, img["src"]) for img in doc.images)
    external.update(webpage["citation"])
    reports.append({"page": path, "canonical": canonical, "title": title[0], "description": description[0], "headings": doc.headings, "schemaTypes": [e["@type"] for e in graph], "status": "pass"})

for target in sorted(internal): page(target)
_, _, _, xml = fetch(BASE + "/sitemap.xml")
root = ET.fromstring(xml)
urls = [node.text for node in root.findall("{*}url/{*}loc")]
assert len(urls) == len(set(urls))
assert all(urlsplit(url).scheme == "https" and urlsplit(url).netloc == "ujjwaluzu.in" for url in urls)
assert all(not urlsplit(url).query and not urlsplit(url).fragment for url in urls)
assert all(not urlsplit(url).path.startswith(("/api/", "/docs/")) for url in urls)
assert all(ORIGIN + PARENT + "/" + slug in urls for slug in BRANDS)
_, _, _, robots = fetch(BASE + "/robots.txt")
robots = robots.decode()
assert f"Sitemap: {ORIGIN}/sitemap.xml" in robots
assert "Allow: /\n" in robots and "Disallow: /api/" in robots
assert "Content-Signal: ai-train=no, search=yes, ai-input=no" in robots
assert "Disallow: /experience" not in robots

for asset in sorted(assets):
    local = asset.replace(ORIGIN, BASE, 1) if asset.startswith(ORIGIN + "/") else asset
    status, _, _, body = fetch(local)
    assert status == 200 and body, f"Broken asset: {asset}"

def check_external(url):
    try:
        status, final, _, _ = fetch(url)
        return {"url": url, "status": status, "final": final}
    except Exception as error:
        return {"url": url, "error": str(error)}

links = list(ThreadPoolExecutor(max_workers=4).map(check_external, sorted(external))) if "--external" in sys.argv else []
output = {"base": BASE, "pages": reports, "sitemapUrls": len(urls), "internalLinksChecked": sorted(internal), "assetsChecked": len(assets), "externalLinks": links}
Path("test-results").mkdir(exist_ok=True)
Path("test-results/experience-seo.json").write_text(json.dumps(output, indent=2), encoding="utf-8")
print(json.dumps(output, indent=2, ensure_ascii=True))
assert all(link.get("status") == 200 for link in links), "External links need review; see test-results/experience-seo.json"
