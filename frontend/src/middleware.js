import { NextResponse } from "next/server";

function middleware(req) {
  const { pathname } = req.nextUrl;
  const admin_token = req.cookies.get("admin_token")?.value;

  if (pathname === "/admin-login") {
    if (admin_token) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    return NextResponse.next();
  }

  const isAdminRoute = pathname === "/admin" || pathname.startsWith("/admin/");
  if (isAdminRoute) {
    if (!admin_token) {
      return NextResponse.redirect(new URL("/admin-login", req.url));
    }
  }

  return NextResponse.next();

  
}

export default middleware;

export const config = {
  matcher:  ["/admin", "/admin/:path*", "/admin-login"],
};
