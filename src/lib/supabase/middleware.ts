import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

type CookieToSet = { name: string; value: string; options?: CookieOptions };

/**
 * When middleware needs to redirect, the cookies attached to
 * `supabaseResponse` (refreshed session tokens) MUST be transferred
 * to the redirect response — otherwise the next request comes in
 * without a valid session, middleware redirects again, browser logs
 * ERR_TOO_MANY_REDIRECTS.
 */
function redirectWithSessionCookies(
  url: URL,
  fromResponse: NextResponse
): NextResponse {
  const redirect = NextResponse.redirect(url);
  for (const cookie of fromResponse.cookies.getAll()) {
    redirect.cookies.set(cookie);
  }
  return redirect;
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh session — critical for SSR
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Guard /admin/* routes (except /admin/login)
  const path = request.nextUrl.pathname;
  if (path.startsWith("/admin") && !path.startsWith("/admin/login")) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", path);
      return redirectWithSessionCookies(url, supabaseResponse);
    }
  }

  // Reverse: if already logged in and visits /admin/login, redirect to dashboard
  if (path === "/admin/login" && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return redirectWithSessionCookies(url, supabaseResponse);
  }

  applySecurityHeaders(supabaseResponse);
  return supabaseResponse;
}

function applySecurityHeaders(res: NextResponse) {
  const headers = res.headers;
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Permitted-Cross-Domain-Policies", "none");
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"
  );
  if (process.env.NODE_ENV === "production") {
    headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
  }
}
