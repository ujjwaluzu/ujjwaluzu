import { NextResponse, type NextRequest } from "next/server";

const homeMarkdown = `# Ujjwal Baunthiyal | ujjwaluzu

Web developer exploring ideas, building products, and turning concepts into real experiences.

## Projects

- [UzzUTV](/project/uzzutv) — streaming platform for movies, TV, and anime.
- [RepoTeam](/project/repoteam) — collaborative project management platform.
- [Commerce](/project/commerce) — auction platform.
- [Wiki](/project/wiki) — web-based encyclopedia.
- [Mail](/project/mail) — single-page email client.

## Explore

- [All projects](/project)
- [More work](/more)
- [Contact](/contact)
- [API documentation](/docs/api)
- [API catalog](/.well-known/api-catalog)
`;

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();
  const accept = request.headers.get("accept") ?? "";
  if (!accept.split(",").some((item) => item.trim().startsWith("text/markdown"))) return NextResponse.next();

  const words = homeMarkdown.trim().split(/\s+/).length;
  return new NextResponse(homeMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Length": String(new TextEncoder().encode(homeMarkdown).length),
      "Vary": "Accept",
      "x-markdown-tokens": String(Math.ceil(words * 1.3)),
      "Link": '</.well-known/api-catalog>; rel="api-catalog", </docs/api>; rel="service-doc", </.well-known/ai-catalog.json>; rel="describedby"; type="application/json"',
    },
  });
}

export const config = { matcher: ["/"] };

