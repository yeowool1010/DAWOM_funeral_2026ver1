"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChevronDown } from "lucide-react";

const STATS = [
  { label: "선임 장례지도사 최소 경력", value: "15년", date: "2026.03.12 기준" },
  { label: "선임 장례지도사 누적 행사 건수", value: "6,000건 +", date: "2026.03.12 기준" },
  // { label: "서비스 수", value: "100개 +", date: "2025.06.30 기준" },
];

export default function AboutPage() {

  const scrollToNext = () => {
    document.getElementById("stats-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/images/about/hero1.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold leading-[13] text-white sm:text-4xl md:text-5xl sm:leading-loose">
            사람다움을 지키는 장례, 
            <br />
            그것이 다움입니다.
          </h1>
          <button
            type="button"
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/90 transition hover:text-white"
            aria-label="아래로 스크롤"
          >
            <ChevronDown className="h-8 w-8" strokeWidth={2} />
          </button>
        </div>
      </section>

      <section
        id="stats-section"
        className="relative overflow-hidden bg-[#0f172a] py-20 md:py-28"
      >
        <div className="absolute right-0 top-0 h-full w-1/2 md:w-2/5">
          <svg
            viewBox="0 0 400 400"
            className="h-full w-full object-cover object-right"
            preserveAspectRatio="xMaxYMax meet"
          >
            <defs>
              <linearGradient id="wave-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(30 58 138)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgb(15 23 42)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M400 400 L400 200 Q350 80 200 120 Q80 160 0 80 L0 400 Z"
              fill="url(#wave-fill)"
            />
            <path
              d="M400 400 L400 180 Q320 40 180 90 Q60 140 0 60 L0 400 Z"
              fill="none"
              stroke="rgb(59 130 246)"
              strokeWidth="2"
              strokeOpacity="0.8"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="max-w-xl text-2xl font-bold leading-loose text-white md:text-3xl">
             장례에 진심인 사람들이 모여,
            <br />
            진정성 있는 장례 문화를 선도합니다.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {STATS.map(({ label, value, date }) => (
              <div key={label}>
                <p className="text-sm font-medium text-white/90">{label}</p>
                <p className="mt-1 text-3xl font-bold text-white md:text-4xl">
                  {value}
                </p>
                <p className="mt-1 text-xs text-slate-400">{date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[60vh] overflow-hidden py-20 md:py-28">
        <Image
          src="/images/about/hero1.png"
          alt=""
          fill
          className="object-cover blur-md"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden />
        <div className="relative z-10 flex min-h-[50vh] items-center justify-center px-4">
          <div className="max-w-2xl rounded-2xl bg-slate-900/80 px-8 py-10 backdrop-blur-sm md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
            Vision
            </p>
            <p className="mt-6 text-lg leading-loose text-white md:text-xl">
            장례는 형식이 아니라 사람에 대한 예의라고 생각합니다.
              <br />
            그래서 우리는 장례의 본질부터 다시 고민했습니다.
              <br />
              과한 비용보다 합리적인 선택을,
              복잡한 절차보다 전문적인 준비를,
              <br />
              보여주기보다 진심 어린 장례를 만들고 싶었습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="relative min-h-[85vh] overflow-hidden">
        {/* <div className="absolute inset-0 bg-black" aria-hidden /> */}
        <div className="absolute inset-0 bg-[#0f172a]" aria-hidden />
        <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold leading-loose text-white sm:text-4xl md:text-5xl sm:leading-loose">
            다움 상조는
            <br />
            사람다움, 아름다움, 장례다움이라는 기준으로
            <br />
            장례의 새로운 기준을 만들어가고 있습니다.
            <br />
            <br />
            마지막 순간까지
            <br />
            사람다운 장례가 이루어질 수 있도록.
            <br />
            그 길을 다움이 함께하겠습니다.
          </h1>
          <button
            type="button"
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/90 transition hover:text-white"
            aria-label="아래로 스크롤"
          >
          </button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
