/** Supabase 공개 URL (클라이언트/서버 공통) */
export function getSupabaseUrl(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
}

/**
 * 게시용(anon) 키 — 대시보드의 Publishable 키 또는 기존 anon 키.
 * `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` 우선.
 */
export function getSupabasePublishableKey(): string {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    ""
  );
}

export function hasSupabaseBrowserConfig(): boolean {
  return Boolean(getSupabaseUrl() && getSupabasePublishableKey());
}
