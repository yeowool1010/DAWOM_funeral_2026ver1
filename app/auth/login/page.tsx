import { Suspense } from "react";
import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="h-[22rem] animate-pulse rounded-xl border border-stone-200 bg-stone-50" />
      }
    >
      <LoginForm />
    </Suspense>
  );
}
