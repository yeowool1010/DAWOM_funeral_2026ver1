import Link from "next/link";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import type { ReviewItem } from "@/lib/reviews";

interface ReviewDetailNavProps {
  prev: ReviewItem | null;
  next: ReviewItem | null;
}

export function ReviewDetailNav({ prev, next }: ReviewDetailNavProps) {
  return (
    <section className="border-t border-stone-200 bg-stone-50 py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex justify-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-800 shadow-sm transition hover:bg-stone-50"
          >
            <List className="h-4 w-4 shrink-0" aria-hidden />
            목록으로 돌아가기
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/reviews/${prev.id}`}
              className="group flex min-h-[4.5rem] flex-col justify-center rounded-lg border border-stone-200 bg-white p-4 text-left shadow-sm transition hover:border-stone-300 hover:bg-stone-50"
            >
              <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-500">
                <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
                이전글
              </span>
              {/* <span className="mt-1 line-clamp-2 text-sm font-medium text-stone-900 group-hover:underline">
                {prev.author} · {prev.date}
              </span> */}
            </Link>
          ) : (
            <div className="flex min-h-[4.5rem] flex-col justify-center rounded-lg border border-dashed border-stone-200 bg-white/60 p-4 text-stone-400">
              <span className="inline-flex items-center gap-1 text-xs font-medium">
                <ChevronLeft className="h-3.5 w-3.5 opacity-50" aria-hidden />
                이전글
              </span>
              <span className="mt-1 text-sm">첫 번째 후기입니다.</span>
            </div>
          )}

          {next ? (
            <Link
              href={`/reviews/${next.id}`}
              className="group flex min-h-[4.5rem] flex-col justify-center rounded-lg border border-stone-200 bg-white p-4 text-right shadow-sm transition hover:border-stone-300 hover:bg-stone-50 sm:col-start-2"
            >
              <span className="inline-flex items-center justify-end gap-1 text-xs font-medium text-stone-500">
                다음글
                <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              </span>
              {/* <span className="mt-1 line-clamp-2 text-sm font-medium text-stone-900 group-hover:underline">
                {next.author} · {next.date}
              </span> */}
            </Link>
          ) : (
            <div className="flex min-h-[4.5rem] flex-col justify-center rounded-lg border border-dashed border-stone-200 bg-white/60 p-4 text-right text-stone-400 sm:col-start-2">
              <span className="inline-flex items-center justify-end gap-1 text-xs font-medium">
                다음글
                <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden />
              </span>
              <span className="mt-1 text-sm">마지막 후기입니다.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
