import { NextResponse } from "next/server";

const PRIMARY_HOST = "www.rishtaserchmatrimony.com";
const REDIRECT_HOSTS = new Set([
  "rishtaserchmatrimony.com",
  "www.rishtasearchmatrimony.com",
  "rishtasearchmatrimony.com",
]);

export function proxy(request) {
  const hostname = request.headers.get("host");

  if (!hostname || !REDIRECT_HOSTS.has(hostname)) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(request.url);
  redirectUrl.protocol = "https:";
  redirectUrl.host = PRIMARY_HOST;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
