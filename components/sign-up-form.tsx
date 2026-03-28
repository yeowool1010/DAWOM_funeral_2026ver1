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
import {
  isValidKoreanPhoneDigits,
  normalizePhoneDigits,
} from "@/lib/phone-validation";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthSuccessDialog } from "@/components/auth-success-dialog";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
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

    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      setError("이름을 2자 이상 입력해 주세요.");
      setIsLoading(false);
      return;
    }

    const phoneDigits = normalizePhoneDigits(phone);
    if (!isValidKoreanPhoneDigits(phoneDigits)) {
      setError("올바른 전화번호를 입력해 주세요. (예: 010-1234-5678)");
      setIsLoading(false);
      return;
    }

    try {
      /**
       * user_metadata 키 `phone`은 Supabase가 전화 인증용 필드와 구분하면서
       * 저장되지 않는 경우가 있어 `phone_number`를 사용합니다.
       * 대시보드 목록의 Phone 열은 SMS 가입용 DB 컬럼이라 비어 있을 수 있고,
       * 유저 상세의 Raw User Meta / user_metadata에서 확인하면 됩니다.
       */
      const { data: signUpData, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/protected`,
          data: {
            name: trimmedName,
            full_name: trimmedName,
            phone_number: phoneDigits,
          },
        },
      });
      if (error) throw error;

      if (signUpData.session) {
        await supabase.auth.updateUser({
          data: {
            name: trimmedName,
            full_name: trimmedName,
            phone_number: phoneDigits,
          },
        });
      }

      setSuccessOpen(true);
    } catch (error: unknown) {
      const raw =
        error instanceof Error ? error.message : "오류가 발생했습니다.";
      setError(mapSupabaseAuthErrorToKo(raw, getAuthErrorStatus(error)));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpSuccessConfirm = () => {
    router.refresh();
    router.push("/auth/sign-up-success");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <AuthSuccessDialog
        open={successOpen}
        onOpenChange={setSuccessOpen}
        kind="signUp"
        onConfirm={handleSignUpSuccessConfirm}
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">회원가입</CardTitle>
          <CardDescription>
            이름과 연락처를 입력한 뒤 이메일로 새 계정을 만듭니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="signup-name">이름</Label>
                <Input
                  id="signup-name"
                  type="text"
                  autoComplete="name"
                  placeholder="홍길동"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="signup-phone">전화번호</Label>
                <Input
                  id="signup-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="010-1234-5678"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={20}
                />
                <p className="text-xs text-stone-500">
                  하이픈 없이 입력하셔도 됩니다.
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">비밀번호</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordRequirementsHint
                  checks={getAuthPasswordRuleChecks(password)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="repeat-password">비밀번호 확인</Label>
                </div>
                <Input
                  id="repeat-password"
                  type="password"
                  required
                  autoComplete="new-password"
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
                {isLoading ? "가입 처리 중…" : "회원가입"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              이미 계정이 있으신가요?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                로그인
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
