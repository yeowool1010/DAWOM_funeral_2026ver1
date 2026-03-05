import { Star } from "lucide-react";
import type { ReviewItem } from "@/lib/reviews";

interface ReviewDetailContentProps {
  review: ReviewItem;
}

export function ReviewDetailContent({ review }: ReviewDetailContentProps) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium text-stone-900">{review.author}</span>
          <span className="text-sm text-stone-500">
            {review.dateShort ?? review.date}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i <= review.rating ? "fill-amber-400 text-amber-400" : "text-stone-200"
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-medium text-stone-600">
            {review.rating}.0
          </span>
        </div>
        <p className="mt-6 text-lg leading-relaxed text-stone-700">
          {review.text}
        </p>
      </div>
    </section>
  );
}
