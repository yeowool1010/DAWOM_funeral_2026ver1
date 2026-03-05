import Link from "next/link";
import { Coins, ChevronRight } from "lucide-react";

export function Review100wonCta() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-2xl font-bold text-amber-700">
            100원
          </div>
          <p className="mt-4 text-lg font-medium text-stone-900">
            당장은 아니지만 미리 장례를 준비하고 싶어요.
          </p>
          <Link
            href="/prime"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            <Coins className="h-4 w-4" />
            월 100원으로 장례 준비하기
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
