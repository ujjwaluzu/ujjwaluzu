import { NextResponse } from "next/server";
import { site } from "@/lib/site";
export function GET() { const base = site.domain; return NextResponse.json({ linkset: [{ anchor: `${base}/api/contact`, "service-desc": [{ href: `${base}/docs/api/openapi.json`, type: "application/vnd.oai.openapi+json;version=3.1.0" }], "service-doc": [{ href: `${base}/docs/api`, type: "text/html" }], status: [{ href: `${base}/api/health`, type: "application/json" }] }] }, { headers: { "Content-Type": "application/linkset+json" } }); }
