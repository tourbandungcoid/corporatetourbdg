import { NextResponse, type NextRequest } from "next/server";
import { SHORT_LINKS, buildShortLinkTarget } from "@/lib/short-links";

/**
 * /go/<code> → page with UTM tags (see src/lib/short-links.ts).
 * 302 (not 301) so a code's destination can change without browsers
 * caching the old one. Unknown codes go to the homepage untagged.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const link = SHORT_LINKS[code.toLowerCase()];
  const target = link
    ? buildShortLinkTarget(link, {
        to: request.nextUrl.searchParams.get("to"),
        content: request.nextUrl.searchParams.get("c"),
      })
    : "/";
  const res = NextResponse.redirect(new URL(target, request.nextUrl.origin), 302);
  res.headers.set("Cache-Control", "no-store");
  res.headers.set("X-Robots-Tag", "noindex");
  return res;
}
