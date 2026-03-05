import Link from "next/link";
import { Calculator, FileText } from "lucide-react";

export function ProductCta() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900">
              어떤 상품을 이용하는게 좋을까요?
            </h3>
            <p className="mt-2 text-stone-600">
              장례 견적을 미리 확인해 보고 내 상황에 따른 상품 추천도 받아보세요
            </p>
            <Link
              href="/estimate"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              <Calculator className="h-4 w-4" />
              장례 견적과 추천 상품 확인하기
            </Link>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-600">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">
                  장례비용 예상 견적표, 임종준비 체크리스트 받아보기
                </h3>
                <Link
                  href="/"
                  className="mt-4 inline-block text-sm font-medium text-stone-700 underline hover:text-stone-900"
                >
                  체크리스트 신청하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
