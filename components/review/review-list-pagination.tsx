import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewListPaginationProps {
  currentPage: number;
  totalPages: number;
  region: string;
  tag: string;
}

export function ReviewListPagination({
  currentPage,
  totalPages,
  region,
  tag,
}: ReviewListPaginationProps) {
  const baseParams = new URLSearchParams();
  if (region && region !== "전체") baseParams.set("region", region);
  if (tag && tag !== "전체보기") baseParams.set("tag", tag);
  const base = baseParams.toString() ? `${baseParams.toString()}&` : "";
  const prefix = base ? `?${base}` : "?";

  if (totalPages <= 1) return null;

  return (
    <nav
      className="border-t border-stone-200 bg-white py-10"
      aria-label="후기 목록 페이지"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 sm:px-6">
        {currentPage > 1 ? (
          <Link
            href={`/reviews${prefix}page=${currentPage - 1}`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-300 text-stone-600 transition hover:bg-stone-50"
            aria-label="이전 페이지"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 text-stone-400">
            <ChevronLeft className="h-5 w-5" />
          </span>
        )}

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) =>
            p === currentPage ? (
              <span
                key={p}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-900 text-sm font-medium text-white"
              >
                {p}
              </span>
            ) : (
              <Link
                key={p}
                href={`/reviews${prefix}page=${p}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-300 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
              >
                {p}
              </Link>
            )
          )}
        </div>

        {currentPage < totalPages ? (
          <Link
            href={`/reviews${prefix}page=${currentPage + 1}`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-300 text-stone-600 transition hover:bg-stone-50"
            aria-label="다음 페이지"
          >
            <ChevronRight className="h-5 w-5" />
          </Link>
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 text-stone-400">
            <ChevronRight className="h-5 w-5" />
          </span>
        )}
      </div>
    </nav>
  );
}
