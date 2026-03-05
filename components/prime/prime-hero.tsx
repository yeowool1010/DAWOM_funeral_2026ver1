import Link from "next/link";
import { Coins, ChevronRight } from "lucide-react";

export function PrimeHero() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
          <Coins className="h-4 w-4" />
          월 100원으로 시작
        </div>
        <h1 className="mt-6 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
          똑똑한 소비자를 위한
          <br />
          <span className="text-amber-600">100원 상조</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
          납입금 부담 없이 가격 보장형 후불제 상조.
          <br />
          다움 프라임으로 장례 비용을 미리 준비하세요.
        </p>
        <Link
          href="/estimate"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-stone-900 px-8 py-4 text-base font-medium text-white transition hover:bg-stone-800"
        >
          견적 알아보기
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
