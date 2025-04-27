import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    apiKey: process.env.MAILERSEND_API_KEY
      ? "API Key is set"
      : "API Key is not set",
  });
}
