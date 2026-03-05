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
    </section>
  );
}
