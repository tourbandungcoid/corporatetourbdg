/**
 * Converts any Google Drive URL to the thumbnail endpoint format.
 * Accepts sharing links (/file/d/ID/view), open links (?id=ID),
 * and existing thumbnail URLs. Non-Drive URLs are returned unchanged.
 */
export function normalizeDriveUrl(url: string): string {
  if (!url) return url;
  try {
    const u = new URL(url);
    if (!u.hostname.endsWith("drive.google.com")) return url;
    if (u.pathname === "/thumbnail" && u.searchParams.has("id")) return url;
    const fileMatch = u.pathname.match(/\/file\/d\/([^/]+)/);
    if (fileMatch) return `https://drive.google.com/thumbnail?id=${fileMatch[1]}&sz=w2400`;
    const id = u.searchParams.get("id");
    if (id) return `https://drive.google.com/thumbnail?id=${id}&sz=w2400`;
  } catch {
    // malformed URL — return as-is
  }
  return url;
}
