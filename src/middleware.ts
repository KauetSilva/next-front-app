import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import { getUrl } from "./lib/get-url";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const pathname = request.nextUrl.pathname;

  if ((pathname === "/" && token) || (pathname === "/login" && token)) {
    return NextResponse.redirect(new URL(getUrl("/dashboard")));
  }

  if (pathname.includes("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL(getUrl("/login")));
    }
    try {
      const secretJwt = process.env.NEXT_PUBLIC_JWT_SECRET as string;

      const jwtConfig = {
        secret: new TextEncoder().encode(secretJwt),
      }
      const { payload } = await jose.jwtVerify(token.value, jwtConfig.secret) as jose.JWTVerifyResult;
      if(!payload) return NextResponse.redirect(new URL(getUrl("/")));

      return;
    } catch (error) {
      console.error("Error verifying token:", error);
      return NextResponse.redirect(new URL(getUrl("/")));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
