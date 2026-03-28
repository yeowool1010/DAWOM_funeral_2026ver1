import Link from "next/link";
import { Button } from "./ui/button";
import { getAuthDisplayName } from "@/lib/auth-display-name";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

export async function AuthButton() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const label = getAuthDisplayName(user);

  return user ? (
    <div className="flex items-center gap-4">
      <span className="text-sm text-stone-600">
        {label ? `${label} 님` : "로그인됨"}
      </span>
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/auth/login">로그인</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/auth/sign-up">회원가입</Link>
      </Button>
    </div>
  );
}
