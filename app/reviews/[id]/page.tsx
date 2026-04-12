import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { ReviewCtaStrip } from "@/components/review/review-cta-strip";
import { ReviewDetailContent } from "@/components/review/review-detail-content";
import { ReviewDetailConsultant } from "@/components/review/review-detail-consultant";
import { ReviewDetailNav } from "@/components/review/review-detail-nav";
import { SiteFooter } from "@/components/site-footer";
import { getAdjacentReviews, getReviewById, REVIEWS } from "@/lib/reviews";

interface ReviewDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return REVIEWS.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: ReviewDetailPageProps) {
  const { id } = await params;
  const review = getReviewById(id);
  if (!review) return { title: "후기 | 다움상조" };
  const location = review.location ?? "";
  const shortText = review.text.slice(0, 50).replace(/\n/g, " ");
  return {
    title: `${location} 장례 후기, ${shortText}... | 숨김없는 장례의 시작, 다움`,
    description: review.text,
  };
}

export default async function ReviewDetailPage({ params }: ReviewDetailPageProps) {
  const { id } = await params;
  const review = getReviewById(id);

  if (!review) {
    notFound();
  }

  const { prev, next } = getAdjacentReviews(id);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ReviewCtaStrip />
        <ReviewDetailContent review={review} />
        {review.consultant && (
          <ReviewDetailConsultant consultant={review.consultant} />
        )}
        <ReviewDetailNav prev={prev} next={next} />
      </main>
      <SiteFooter />
    </div>
  );
}
