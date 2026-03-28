import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Suspense } from "react";

async function ErrorContent({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      {params?.error ? (
        <p className="text-sm text-muted-foreground">
          오류 코드: {params.error}
        </p>
      ) : (
        <p className="text-sm text-muted-foreground">
          알 수 없는 오류가 발생했습니다.
        </p>
      )}
    </>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">문제가 발생했습니다</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Suspense
            fallback={
              <p className="text-sm text-muted-foreground">불러오는 중…</p>
            }
          >
            <ErrorContent searchParams={searchParams} />
          </Suspense>
          <Link
            href="/auth/login"
            className="text-sm font-medium text-stone-900 underline underline-offset-4"
          >
            로그인으로 돌아가기
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
