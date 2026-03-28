import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { ReviewCtaStrip } from "@/components/review/review-cta-strip";
import { ReviewBestCarousel } from "@/components/review/review-best-carousel";
import { ReviewListHeader } from "@/components/review/review-list-header";
import { ReviewListFilters } from "@/components/review/review-list-filters";
import { ReviewListCard } from "@/components/review/review-list-card";
import { ReviewListPagination } from "@/components/review/review-list-pagination";
import { SiteFooter } from "@/components/site-footer";
import { getFilteredReviews, REVIEWS_PER_PAGE } from "@/lib/reviews";

interface ReviewsPageProps {
  searchParams: Promise<{ page?: string; region?: string; tag?: string }>;
}

export const metadata = {
  title: "다움 이용 후기 | 숨김없는 장례의 시작, 다움",
  description:
    "비슷한 고민을 하셨던 상주님들의 후기를 살펴보세요. 다움장례연구소 이용 후기를 확인할 수 있습니다.",
};

async function ReviewsListContent({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; region?: string; tag?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);
  const region = params.region ?? "전체";
  const tag = params.tag ?? "전체보기";

  const filtered = getFilteredReviews(region, tag);
  const totalPages = Math.ceil(filtered.length / REVIEWS_PER_PAGE) || 1;
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * REVIEWS_PER_PAGE;
  const pageReviews = filtered.slice(start, start + REVIEWS_PER_PAGE);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {pageReviews.length === 0 ? (
            <div className="py-16 text-center text-stone-500">
              해당 조건의 후기가 없습니다.
            </div>
          ) : (
            pageReviews.map((review) => (
              <ReviewListCard key={review.id} review={review} />
            ))
          )}
        </div>
      </section>
      <ReviewListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        region={region}
        tag={tag}
      />
    </>
  );
}

function ReviewsListFallback() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-16 text-center text-stone-400">로딩 중...</div>
        </div>
      </section>
    </>
  );
}

export default function ReviewsPage({ searchParams }: ReviewsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ReviewCtaStrip />
        <ReviewBestCarousel />
        <ReviewListHeader />
        <Suspense fallback={<div className="h-32 border-b border-stone-200" />}>
          {/* <ReviewListFilters /> */}
        </Suspense>
        <Suspense fallback={<ReviewsListFallback />}>
          <ReviewsListContent searchParams={searchParams} />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
