import { NextResponse } from "next/server";
export function GET() { return NextResponse.json({ "$schema": "https://schemas.agentskills.io/discovery/0.2.0/schema.json", skills: [] }, { headers: { "Access-Control-Allow-Origin": "*" } }); }
