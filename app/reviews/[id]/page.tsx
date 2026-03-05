import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { ReviewCtaStrip } from "@/components/review/review-cta-strip";
import { ReviewDetailContent } from "@/components/review/review-detail-content";
import { ReviewDetailChecklistBanner } from "@/components/review/review-detail-checklist-banner";
import { ReviewDetailConsultant } from "@/components/review/review-detail-consultant";
import { ReviewPackageCta } from "@/components/review/review-package-cta";
import { Review100wonCta } from "@/components/review/review-100won-cta";
import { ReviewDetailBack } from "@/components/review/review-detail-back";
import { ReviewChecklistCta } from "@/components/review/review-checklist-cta";
import { SiteFooter } from "@/components/site-footer";
import { getReviewById, REVIEWS } from "@/lib/reviews";

interface ReviewDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return REVIEWS.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: ReviewDetailPageProps) {
  const { id } = await params;
  const review = getReviewById(id);
  if (!review) return { title: "후기 | 다움 장례연구소" };
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

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ReviewCtaStrip />
        <ReviewDetailContent review={review} />
        <ReviewDetailChecklistBanner />
        {review.consultant && (
          <ReviewDetailConsultant consultant={review.consultant} />
        )}
        <ReviewPackageCta />
        <Review100wonCta />
        <ReviewDetailBack />
        <ReviewDetailBack />
        <ReviewChecklistCta />
      </main>
      <SiteFooter />
    </div>
  );
}
