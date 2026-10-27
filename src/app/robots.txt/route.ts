import { NextResponse } from "next/server";
import { site } from "@/lib/site";
export function GET() {
  return new NextResponse(
    `User-agent: *\nDisallow: /api/\nAllow: /\nContent-Signal: search=yes, ai-input=yes, ai-train=no\n\nUser-agent: GPTBot\nDisallow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}
