"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { AuthSuccessDialog } from "@/components/auth-success-dialog";
import { getAuthDisplayName } from "@/lib/auth-display-name";
import { tryCreateBrowserClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export function HeaderAuth() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [logoutSuccessOpen, setLogoutSuccessOpen] = useState(false);

  useEffect(() => {
    const supabase = tryCreateBrowserClient();
    if (!supabase) {
      setLoading(false);
      return;
    }
    supabase.auth.getUser().then(({ data: { user: u } }) => {
      setUser(u);
      setLoading(false);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const logout = async () => {
    const supabase = tryCreateBrowserClient();
    if (!supabase) return;
    await supabase.auth.signOut();
    setLogoutSuccessOpen(true);
  };

  const handleLogoutConfirm = () => {
    router.refresh();
    router.push("/");
  };

  if (loading) {
    return <span className="hidden w-20 shrink-0 sm:inline-block" aria-hidden />;
  }

  return (
    <>
      {user ? (
        <div className="flex items-center gap-2">
          <span className="max-w-[140px] truncate text-xs text-stone-600">
            {getAuthDisplayName(user)}
            님
          </span>
          <Button type="button" variant="outline" size="sm" onClick={logout}>
            로그아웃
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="px-2" asChild>
            <Link href="/auth/login">로그인</Link>
          </Button>
          <Button size="sm" className="px-2" asChild>
            <Link href="/auth/sign-up">회원가입</Link>
          </Button>
        </div>
      )}
      <AuthSuccessDialog
        open={logoutSuccessOpen}
        onOpenChange={setLogoutSuccessOpen}
        kind="logout"
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
}
