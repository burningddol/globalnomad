import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { cookieOptions } from "./auth.server";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function handleAuthPost(request: NextRequest, apiPath: string) {
  const cookieStore = await cookies();
  const body = await request.json();

  const res = await fetch(`${API_BASE}/${apiPath}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!res.ok) {
    const errorResponse = NextResponse.json(data, { status: res.status });

    errorResponse.cookies.delete("access_token");
    errorResponse.cookies.delete("refresh_token");

    return errorResponse;
  }

  const response = NextResponse.json({ data });

  if (data.accessToken && data.refreshToken) {
    response.cookies.set("access_token", data.accessToken, {
      ...cookieOptions,
      maxAge: 60 * 30, // 30분
    });
    response.cookies.set("refresh_token", data.refreshToken, {
      ...cookieOptions,
      maxAge: 60 * 60 * 24 * 7, // 7일
    });
  }

  return response;
}
