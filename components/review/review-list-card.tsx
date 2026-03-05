import Link from "next/link";
import { Star, User } from "lucide-react";
import type { ReviewItem } from "@/lib/reviews";

const SNIPPET_LENGTH = 120;

interface ReviewListCardProps {
  review: ReviewItem;
}

export function ReviewListCard({ review }: ReviewListCardProps) {
  const snippet =
    review.text.length > SNIPPET_LENGTH
      ? `${review.text.slice(0, SNIPPET_LENGTH)}...`
      : review.text;

  return (
    <article className="border-b border-stone-200 py-6 last:border-b-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-500">
            <User className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i <= review.rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-stone-200"
                  }`}
                />
              ))}
              <span className="text-sm font-medium text-stone-700">
                {review.rating}
              </span>
            </div>
            <p className="mt-1 text-sm text-stone-600">
              {review.author}
              {review.ageGender && ` · ${review.ageGender}`}
              {review.timeAgo && ` · ${review.timeAgo}`}
            </p>
            <p className="mt-3 text-stone-700 leading-relaxed">{snippet}</p>
            <div className="mt-4 flex justify-end">
              <Link
                href={`/reviews/${review.id}`}
                className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
              >
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
