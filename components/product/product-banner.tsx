"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "추모 테이블",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&q=80",
  },
  {
    title: "첫 패키지",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&q=80",
  },
  {
    title: "다움 프라임",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
  },
  {
    title: "맞춤 상담",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  },
];

export function ProductBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-stone-100">
      <div className="relative aspect-[21/9] w-full min-h-[200px] sm:min-h-[280px]">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-stone-900/30" />
          </div>
        ))}
        <button
          type="button"
          onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white"
          aria-label="이전"
        >
          <ChevronLeft className="h-5 w-5 text-stone-700" />
        </button>
        <button
          type="button"
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white"
          aria-label="다음"
        >
          <ChevronRight className="h-5 w-5 text-stone-700" />
        </button>
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`${i + 1}번 배너`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
