"""Read-only production redirect/crawler audit. Does not request indexing.

py scripts/audit-intelligencex-production.py
Exits nonzero until the intended apex serving / www redirect policy is observed.
User-agent probes cannot establish access from verified crawler IP ranges.
"""
import json
import urllib.request
import urllib.error
import urllib.parse
from datetime import datetime, timezone
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor

ORIGIN = "https://ujjwaluzu.in"
PATH = "/experience/intelligencex"


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, request, fp, code, msg, headers, newurl):
        return None


def probe(url, agent="Mozilla/5.0 (Portfolio release verification)"):
    hops, visited = [], set()
    opener = urllib.request.build_opener(NoRedirect)
    for _ in range(8):
        if url in visited:
            return {"hops": hops, "error": "redirect loop"}
        visited.add(url)
        try:
            response = opener.open(urllib.request.Request(url, headers={"User-Agent": agent}), timeout=30)
        except urllib.error.HTTPError as error:
            response = error
        except Exception as error:
            return {"hops": hops, "error": str(error)}
        with response:
            body = response.read().decode("utf-8", errors="replace")
            hops.append({"url": url, "status": response.code, "location": response.headers.get("Location"), "xRobotsTag": response.headers.get("X-Robots-Tag")})
            if response.code in (301, 302, 303, 307, 308) and response.headers.get("Location"):
                url = urllib.parse.urljoin(url, response.headers["Location"])
                continue
            return {"hops": hops, "final": url, "guidePresent": "IntelligenceX: Company, Products &amp; My Developer Experience" in body, "aiInputAllowed": "ai-input=yes" in body}
    return {"hops": hops, "error": "too many redirects"}


variants = [f"{scheme}://{host}{path}" for scheme in ("http", "https") for host in ("ujjwaluzu.in", "www.ujjwaluzu.in") for path in (PATH, PATH + "?utm_source=release-check&check=path")]
with ThreadPoolExecutor(max_workers=4) as pool:
    results = dict(zip(variants, pool.map(probe, variants)))
    bots = dict(zip(["Googlebot", "Bingbot", "OAI-SearchBot"], pool.map(lambda agent: probe(ORIGIN + PATH, agent), ["Googlebot", "Bingbot", "OAI-SearchBot"])))
robots = probe(ORIGIN + "/robots.txt")
valid = all(result.get("final") == ORIGIN + urllib.parse.urlsplit(url).path + ("?" + urllib.parse.urlsplit(url).query if urllib.parse.urlsplit(url).query else "") and result.get("guidePresent") and result["hops"][-1]["status"] == 200 and all(hop["status"] in (301, 308) for hop in result["hops"][:-1]) for url, result in results.items())
valid = valid and len(results[ORIGIN + PATH]["hops"]) == 1 and robots.get("aiInputAllowed", False)
valid = valid and all(result.get("final") == ORIGIN + PATH and len(result["hops"]) == 1 and result.get("guidePresent") and result["hops"][-1]["status"] == 200 and "noindex" not in (result["hops"][-1]["xRobotsTag"] or "").lower() for result in bots.values())
output = {"checkedAt": datetime.now(timezone.utc).isoformat(), "releaseReady": valid, "variants": results, "crawlerUserAgentProbes": bots, "robots": robots, "limit": "Not a verified crawler-IP test or search-engine indexed canonical inspection."}
Path("test-results").mkdir(exist_ok=True)
Path("test-results/intelligencex-production-audit.json").write_text(json.dumps(output, indent=2), encoding="utf-8")
print(json.dumps(output, indent=2))
raise SystemExit(0 if valid else 1)
