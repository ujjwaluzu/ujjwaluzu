import { NextResponse } from "next/server";
import { site } from "@/lib/site";
export function GET() {
  const base = site.domain;
  return NextResponse.json({ openapi: "3.1.0", info: { title: "ujjwaluzu Contact API", version: "1.0.0", description: "Submit a message using the portfolio contact form." }, servers: [{ url: base }], paths: { "/api/contact": { post: { operationId: "sendContactMessage", summary: "Send a contact message", requestBody: { required: true, content: { "application/json": { schema: { type: "object", required: ["name", "email", "message"], properties: { name: { type: "string", minLength: 2, maxLength: 50 }, email: { type: "string", format: "email", maxLength: 254 }, message: { type: "string", minLength: 10, maxLength: 1000 }, website: { type: "string", description: "Honeypot field; leave empty." } } } } } }, responses: { "200": { description: "Message accepted" }, "400": { description: "Invalid submission" }, "500": { description: "Contact service unavailable" }, "502": { description: "Upstream delivery failed" } } } } } }, { headers: { "Access-Control-Allow-Origin": "*" } });
}
