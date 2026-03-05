import Link from "next/link";
import { Calculator } from "lucide-react";

export function PrimeCta() {
  return (
    <section className="bg-stone-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">
          나에게 맞는 상품이 궁금하다면
        </h2>
        <p className="mt-3 text-stone-300">
          장례 견적을 확인하고 추천 상품을 받아보세요.
        </p>
        <Link
          href="/estimate"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-stone-900 transition hover:bg-stone-100"
        >
          <Calculator className="h-5 w-5" />
          장례 견적 알아보기
        </Link>
      </div>
    </section>
  );
}
