import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { ProductSubNav } from "@/components/product/product-sub-nav";
import { SiteFooter } from "@/components/site-footer";
import { getProductPackageBySlug, productPackages } from "@/lib/product-packages";

export function generateStaticParams() {
  return productPackages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const pkg = getProductPackageBySlug(params.slug);
  if (!pkg) return { title: "상품안내 | 다움상조" };

  return {
    title: `${pkg.name} | 상품안내 | 다움상조`,
    description: `${pkg.desc} (${pkg.price}${pkg.unit})`,
  };
}

export default function ProductPackagePage({ params }: { params: { slug: string } }) {
  const pkg = getProductPackageBySlug(params.slug);
  if (!pkg) notFound();

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <ProductSubNav />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-6">
          <div>
            <div className="text-sm font-medium text-stone-500">{pkg.tag}</div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              {pkg.name}
            </h1>
            <p className="mt-3 max-w-2xl text-stone-600">{pkg.desc}</p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-stone-900">{pkg.price}</span>
              <span className="text-stone-600">{pkg.unit}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
              >
                예상 견적 받아보기
              </Link>
              <a
                href="tel:1600-4417"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-50"
              >
                24시간 고객센터 1600-4417
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-50"
              >
                전체 상품으로
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-stone-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-stone-900">핵심 포인트</h2>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                {pkg.highlights.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-stone-400" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-stone-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-stone-900">이런 분께 추천해요</h2>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                {pkg.recommendedFor.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-stone-400" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-stone-900">다음 단계</h2>
            <p className="mt-2 text-sm text-stone-600">
              정확한 구성/옵션은 지역·장례식장·상황에 따라 달라질 수 있어요. 예상 견적을 받아보시면 상담을 통해
              맞춤으로 안내해드릴게요.
            </p>
            <div className="mt-4">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
              >
                지금 견적 시작하기
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

