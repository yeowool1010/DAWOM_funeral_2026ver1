"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";

const BEST_REVIEWS = REVIEWS.slice(0, 3);

export function ReviewBestCarousel() {
  const [index, setIndex] = useState(0);

  if (BEST_REVIEWS.length === 0) return null;

  const current = BEST_REVIEWS[index];

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + BEST_REVIEWS.length) % BEST_REVIEWS.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % BEST_REVIEWS.length);
  };

  return (
    <section className="bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
          다움 베스트 후기
        </h2>
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition hover:bg-stone-100 sm:flex"
            aria-label="이전 후기"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex-1 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-500">
                <User className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i <= current.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-stone-200"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-sm font-medium text-stone-700">
                    {current.rating}
                  </span>
                </div>
                <p className="mt-1 text-sm text-stone-600">
                  {current.author}
                  {current.ageGender && ` | ${current.ageGender}`}
                  {current.date && ` | ${current.date}`}
                </p>
                <p className="mt-4 text-stone-800 leading-relaxed">
                  {current.text}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/reviews/${current.id}`}
                    className="inline-flex items-center rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
                  >
                    자세히 보기
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition hover:bg-stone-100 sm:flex"
            aria-label="다음 후기"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {BEST_REVIEWS.map((review, i) => (
            <button
              key={review.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-stone-800" : "w-2 bg-stone-300"
              }`}
              aria-label={`${i + 1}번째 후기`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

