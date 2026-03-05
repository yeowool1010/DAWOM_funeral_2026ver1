"use client";

import { useState } from "react";
import Link from "next/link";
import { Quote, ChevronRight } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";

const TAGS = [
  "따듯하고 능숙한 장례지도사",
  "해외 거주민",
  "종교 장례",
  "이미 가입된 상조가 있는 경우",
  "사랑하는 가족을 모신 고객님들",
];

export function ReviewsSection() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  return (
    <section id="reviews" className="bg-stone-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-stone-900 sm:text-3xl">
          다움 베스트 후기
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeTag === tag
                  ? "bg-stone-900 text-white"
                  : "bg-white text-stone-600 shadow-sm hover:bg-stone-100"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          {REVIEWS.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-stone-300" />
              <p className="mt-4 text-stone-700">{review.text}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-stone-500">
                <span>{review.author} | {review.date}</span>
                <Link
                  href={`/reviews/${review.id}`}
                  className="font-medium text-stone-700 hover:underline"
                >
                  자세히보기
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-stone-800 font-medium hover:text-stone-600"
          >
            다움 이용 후기 전체 보기
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
