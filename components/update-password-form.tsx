"use client";

import { cn } from "@/lib/utils";
import {
  getAuthPasswordRuleChecks,
  isAuthPasswordValid,
} from "@/lib/auth-password-policy";
import {
  getAuthErrorStatus,
  mapSupabaseAuthErrorToKo,
} from "@/lib/supabase-auth-error-ko";
import { createClient } from "@/lib/supabase/client";
import { PasswordRequirementsHint } from "@/components/password-requirements-hint";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (!isAuthPasswordValid(password)) {
      setError("비밀번호 조건을 모두 만족하는지 확인해 주세요.");
      setIsLoading(false);
      return;
    }

    if (password !== repeatPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      router.refresh();
      router.push("/");
    } catch (error: unknown) {
      const raw =
        error instanceof Error ? error.message : "오류가 발생했습니다.";
      setError(mapSupabaseAuthErrorToKo(raw, getAuthErrorStatus(error)));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">새 비밀번호 설정</CardTitle>
          <CardDescription>
            사용하실 새 비밀번호를 입력한 뒤 저장해 주세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">새 비밀번호</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordRequirementsHint
                  checks={getAuthPasswordRuleChecks(password)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="repeat-password">새 비밀번호 확인</Label>
                <Input
                  id="repeat-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                {repeatPassword.length > 0 && (
                  <p
                    className={cn(
                      "mt-1 text-xs",
                      password === repeatPassword
                        ? "text-emerald-700"
                        : "text-amber-700",
                    )}
                  >
                    {password === repeatPassword
                      ? "✓ 비밀번호가 일치합니다."
                      : "비밀번호가 일치하지 않습니다."}
                  </p>
                )}
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "저장 중…" : "비밀번호 저장"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
