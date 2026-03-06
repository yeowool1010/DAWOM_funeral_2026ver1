import Link from "next/link";
import { Phone, Package } from "lucide-react";

export function ReviewPackageCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">
                후기가 입증한 다움 패키지,
                <br />
                미리 알아보신다면
              </h2>
              <p className="mt-3 text-stone-600">
                월 납입금 부담이 적은 100원 상조부터
                <br />
                한번 납입으로 큰 혜택을 보장받을 수 있는 프리미엄 멤버십까지
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
              >
                <Package className="h-4 w-4" />
                패키지 추천받기
              </Link>
              <a
                href="tel:1600-4417"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
              >
                <Phone className="h-4 w-4" />
                전화문의
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
