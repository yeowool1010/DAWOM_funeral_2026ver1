import type { User } from "@supabase/supabase-js";

/** user_metadata의 이름·표시명 우선, 없으면 이메일 */
export function getAuthDisplayName(user: User | null | undefined): string {
  if (!user) return "";
  const meta = user.user_metadata as Record<string, unknown> | null | undefined;
  const fullName =
    typeof meta?.full_name === "string" ? meta.full_name.trim() : "";
  const name = typeof meta?.name === "string" ? meta.name.trim() : "";
  return fullName || name || user.email || "";
}
