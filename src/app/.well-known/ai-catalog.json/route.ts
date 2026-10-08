import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export function GET() {
  const catalog = {
    specVersion: "1.0.0",
    host: { name: site.name, url: site.domain },
    entries: [{
      identifier: "urn:air:ujjwaluzu.in:api:contact",
      displayName: "Portfolio contact API",
      type: "application/vnd.oai.openapi+json;version=3.1.0",
      url: `${site.domain}/docs/api/openapi.json`,
      representativeQueries: [
        "How can I send Ujjwal a message?",
        "Where is the portfolio contact API documented?",
        "How do I submit a collaboration inquiry?",
      ],
    }],
  };
  return NextResponse.json(catalog, { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
}
