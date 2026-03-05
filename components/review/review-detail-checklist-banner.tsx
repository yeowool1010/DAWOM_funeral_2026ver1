import Link from "next/link";
import { FileText } from "lucide-react";

export function ReviewDetailChecklistBanner() {
  return (
    <section className="bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/"
          className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition hover:border-stone-300 sm:flex-row sm:justify-center sm:text-left"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-600">
            <FileText className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-semibold text-stone-900">
              장례 준비에 필요한 체크리스트 받아보기
            </h3>
            <p className="mt-1 text-sm text-stone-600">
              후기를 보신 많은 분들이 이 체크리스트로 미리 준비하셨어요.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
