"use client";

import { useState } from "react";
import { Quote, ChevronRight } from "lucide-react";

const TAGS = [
  "따듯하고 능숙한 장례지도사",
  "해외 거주민",
  "종교 장례",
  "이미 가입된 상조가 있는 경우",
  "사랑하는 가족을 모신 고객님들",
];

const REVIEWS = [
  {
    text: "다움을 통해 전세권 장례 지도사님을 만나게 되었습니다. 병원에서 저녁 시간에 어머님이 돌아가시고 정신없이 병원 서류 마무리 하고 장례식장 예약 후 안치실로 가보니 이미 오셔서 기다리고 계시더군요. 여건 상 홀로 임종을 지켜야 했는데, 덕분에 마음이 놓였습니다.",
    author: "김○○님",
    date: "2024년 3월 13일",
  },
  {
    text: "처음 장례를 치르는 상황이라 막막했는데, 단계별로 안내해 주셔서 큰 도움이 되었습니다. 비용도 투명하게 공개되어 있어 믿고 이용할 수 있었어요.",
    author: "이○○님",
    date: "2024년 2월 28일",
  },
  {
    text: "해외에 있어서 부모님 장례를 준비하기가 어려웠는데, 원격으로도 잘 상담받고 진행할 수 있어서 감사했습니다.",
    author: "박○○님",
    date: "2024년 1월 15일",
  },
];

export function ReviewsSection() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  return (
    <section id="reviews" className="bg-stone-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-stone-900 sm:text-3xl">
          다양한 사례의 후기를 확인해 보세요
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
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-stone-300" />
              <p className="mt-4 text-stone-700">{review.text}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-stone-500">
                <span>{review.author} | {review.date}</span>
                <a href="#" className="font-medium text-stone-700 hover:underline">
                  자세히보기
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-stone-800 font-medium hover:text-stone-600"
          >
            다움 이용 후기 전체 보기
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
