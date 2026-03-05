import Link from "next/link";
import { FileText } from "lucide-react";

export function ReviewChecklistCta() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-600">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">
                장례비용 예상 견적표, 임종준비 체크리스트 받아보기
              </h3>
              <Link
                href="/"
                className="mt-2 inline-block text-sm font-medium text-stone-600 underline hover:text-stone-900"
              >
                체크리스트 신청하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
