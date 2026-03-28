import { createBrowserClient } from "@supabase/ssr";
import { getSupabasePublishableKey, getSupabaseUrl } from "./env";

/** URL·키가 없으면 null (헤더 등에서 예외로 앱 전체가 죽지 않게) */
export function tryCreateBrowserClient() {
  const url = getSupabaseUrl();
  const key = getSupabasePublishableKey();
  if (!url || !key) return null;
  return createBrowserClient(url, key);
}

/**
 * 폼 제출 등 — 설정이 없으면 @supabase/ssr가 던지기 전에 안내용 오류를 던집니다.
 */
export function createClient() {
  const url = getSupabaseUrl();
  const key = getSupabasePublishableKey();
  if (!url || !key) {
    throw new Error(
      "Supabase 환경 변수가 없습니다. 배포 환경(Vercel 등)에 NEXT_PUBLIC_SUPABASE_URL 과 NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY(또는 NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)를 설정하세요.",
    );
  }
  return createBrowserClient(url, key);
}
