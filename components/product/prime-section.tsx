import Link from "next/link";
import { ChevronRight, Coins } from "lucide-react";

export function PrimeSection() {
  return (
    <section id="prime" className="scroll-mt-20 bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">
                매달 금액을 나눠 내는 다움 프라임
              </h2>
              <p className="mt-3 text-stone-600">
                월 100원만 내면 가입할 수 있는
                <br />
                다움 월 납입 상품을 살펴보세요
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-6 lg:items-end">
              <div className="w-full max-w-md rounded-xl border border-stone-200 bg-stone-50/50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <Coins className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">100원상조</h3>
                    <p className="mt-1 text-sm text-stone-600">
                      100원씩 300개월 납입하고 차액은 장례 후 납부하기
                    </p>
                  </div>
                </div>
                <Link
                  href="/prime"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-stone-800 hover:text-stone-600"
                >
                  자세히 알아보기
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
