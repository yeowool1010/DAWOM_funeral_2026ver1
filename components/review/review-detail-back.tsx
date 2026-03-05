import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ReviewDetailBack() {
  return (
    <section className="bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-xl font-bold text-stone-900">
            참고하기 좋은 상세한 후기만 모았어요
          </h2>
          <Link
            href="/reviews"
            className="mt-6 inline-flex items-center gap-2 text-stone-700 font-medium hover:text-stone-900"
          >
            <ArrowLeft className="h-4 w-4" />
            후기 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </section>
  );
}
