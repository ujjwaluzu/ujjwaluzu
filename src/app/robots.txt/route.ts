import { NextResponse } from "next/server";
import { site } from "@/lib/site";
export function GET() { return new NextResponse(`User-agent: *\nAllow: /\nDisallow: /api/\nContent-Signal: ai-train=no, search=yes, ai-input=no\nSitemap: ${site.domain}/sitemap.xml\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } }); }
