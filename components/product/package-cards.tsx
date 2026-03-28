import Link from "next/link";

import { productPackages } from "@/lib/product-packages";

export function PackageCards() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            다움 패키지 종류 한눈에 보기
          </h2>
          <p className="mt-3 text-stone-600">
            모든 패키지는 가입 당일부터 즉시 이용할 수 있어요
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-4">
          {productPackages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <Link
                key={pkg.slug}
                href={`/products/${pkg.slug}`}
                aria-label={`${pkg.name} 안내 페이지로 이동`}
                className="group rounded-2xl border border-stone-200 bg-stone-50/50 p-6 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
              >
                <span className="text-xs font-medium text-stone-500">{pkg.tag}</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-stone-900">{pkg.price}</span>
                  <span className="text-stone-600">{pkg.unit}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-stone-900 group-hover:underline">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-stone-600">{pkg.desc}</p>
                <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-stone-600">
                  <Icon className="h-5 w-5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <section className="bg-slate-50 mt-12">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              다움 전체 서비스 비교
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              무빈소장, 다움 220, 다움 350, 다움 450의 차이를 한눈에 비교해 보세요.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border bg-white text-sm md:text-base">
              <div className="grid grid-cols-5 bg-slate-50 text-center font-semibold text-slate-700">
                <div className="px-3 py-3 text-left text-xs font-medium text-slate-500 md:text-sm">
                  구분
                </div>
                <div className="px-3 py-3">무빈소장</div>
                <div className="px-3 py-3">다움 220</div>
                <div className="px-3 py-3">다움 350</div>
                <div className="px-3 py-3">다움 450</div>
              </div>
              <div className="divide-y text-center">
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    접객 도우미
                  </div>
                  <div className="px-3 py-3">없음</div>
                  <div className="px-3 py-3">2명</div>
                  <div className="px-3 py-3">6명</div>
                  <div className="px-3 py-3">8명</div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    장례 용품
                  </div>
                  <div className="px-3 py-3">실속형</div>
                  <div className="px-3 py-3">실속형</div>
                  <div className="px-3 py-3">고급형</div>
                  <div className="px-3 py-3">고급형</div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    장의 차량
                  </div>
                  <div className="px-3 py-3">1대</div>
                  <div className="px-3 py-3">1대</div>
                  <div className="px-3 py-3">2대</div>
                  <div className="px-3 py-3">2대</div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    회원가
                  </div>
                  <div className="px-3 py-3">130만원</div>
                  <div className="px-3 py-3">200만원</div>
                  <div className="px-3 py-3">330만원</div>
                  <div className="px-3 py-3">430만원</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </section>
  );
}
