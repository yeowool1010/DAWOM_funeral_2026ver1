"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

// TODO: 여기에 이미지 경로를 채워 넣으면 됩니다. (예: "/images/about/carousel/1.jpg")
const CAROUSEL_ROW_1: string[] = [
  "/images/about/carousel/홍보1.png",
  "/images/about/carousel/홍보2.png",
  "/images/about/carousel/홍보3.png",
  "/images/about/carousel/홍보4.png",
  "/images/about/carousel/홍보5.png",
];
const CAROUSEL_ROW_2: string[] = [
  "/images/about/carousel/홍보6.png",
  "/images/about/carousel/홍보7.jpg",
  "/images/about/carousel/홍보8.jpg",
  "/images/about/carousel/홍보9.jpg",
  "/images/about/carousel/홍보10.jpg",
];
const CAROUSEL_ROW_3: string[] = [
  "/images/about/carousel/홍보11.jpg",
  "/images/about/carousel/홍보12.jpg",
  "/images/about/carousel/홍보13.jpg",
  // 한글·대문자 확장자 조합은 Vercel/이미지 최적화에서 실패하는 경우가 있어 ASCII 복사본 사용
  "/images/about/carousel/홍보14.png",
  "/images/about/carousel/홍보15.jpg",
];

const STATS = [
  { label: "선임 장례지도사 최소 경력", value: "15년", date: "2026.03.12 기준" },
  { label: "선임 장례지도사 누적 행사 건수", value: "6,000건 +", date: "2026.03.12 기준" },
  // { label: "서비스 수", value: "100개 +", date: "2025.06.30 기준" },
];

const COMPANY_HISTORY = [
  { year: 2026, dateLabel: "2026.3", title: "다움상조 출범" },
  { year: 2009, dateLabel: "2009.4", title: "예람장례서비스 발족" },
] as const;

export default function AboutPage() {

  const [visionProgress, setVisionProgress] = useState(0);
  const visionSectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const scrollToNext = () => {
    document.getElementById("stats-section")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const el = visionSectionRef.current;
    if (!el) return;

    const updateProgress = () => {
      const rect = el.getBoundingClientRect();
      const sectionHeight = el.offsetHeight;
      const vh = typeof window !== "undefined" ? window.innerHeight : 800;
      let progress: number;
      if (rect.top >= vh) {
        progress = 0; // 아직 화면 아래: 비표시
      } else if (rect.top >= 0) {
        progress = 1 - rect.top / vh; // 아래에서 올라오며 등장
      } else if (rect.top > -sectionHeight) {
        progress = 1 + rect.top / sectionHeight; // 위로 스크롤되며 디졸브
      } else {
        progress = 0; // 완전히 지나감
      }
      setVisionProgress(Math.max(0, Math.min(1, progress)));
    };

    const onScroll = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/images/about/hero11.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold leading-[2] text-white sm:text-4xl md:text-5xl sm:leading-loose">
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
              d="M400 400 L400 180 Q320 40 180 90 Q60 140 0 60 L0 900 Z"
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

      <section
        id="stats-section"
        className="relative overflow-hidden bg-[#0f172a] py-20 md:py-28"
       >

        {/* 3줄 무한 자동 이미지 캐러셀 */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-4 md:space-y-5">
            <div className="daum-marquee daum-marquee--right">
              <div className="daum-marquee__fade daum-marquee__fade--left" />
              <div className="daum-marquee__fade daum-marquee__fade--right" />
              <div className="daum-marquee__track">
                {[...CAROUSEL_ROW_1, ...CAROUSEL_ROW_1].map((src, idx) => (
                  <div
                    key={`${src}-${idx}`}
                    className="daum-marquee__item relative h-24 w-44 shrink-0 overflow-hidden rounded-xl bg-[#0f172a] sm:h-28 sm:w-52 md:h-32 md:w-60"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="daum-marquee daum-marquee--left">
              <div className="daum-marquee__fade daum-marquee__fade--left" />
              <div className="daum-marquee__fade daum-marquee__fade--right" />
              <div className="daum-marquee__track">
                {[...CAROUSEL_ROW_2, ...CAROUSEL_ROW_2].map((src, idx) => (
                  <div
                    key={`${src}-${idx}`}
                    className="daum-marquee__item relative h-24 w-44 shrink-0 overflow-hidden rounded-xl bg-[#0f172a] sm:h-28 sm:w-52 md:h-32 md:w-60"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="daum-marquee daum-marquee--right daum-marquee--slow">
              <div className="daum-marquee__fade daum-marquee__fade--left" />
              <div className="daum-marquee__fade daum-marquee__fade--right" />
              <div className="daum-marquee__track">
                {[...CAROUSEL_ROW_3, ...CAROUSEL_ROW_3].map((src, idx) => (
                  <div
                    key={`${src}-${idx}`}
                    className="daum-marquee__item relative h-24 w-44 shrink-0 overflow-hidden rounded-xl bg-[#0f172a] sm:h-28 sm:w-52 md:h-32 md:w-60"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
                      unoptimized={src.includes("carousel-14")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          /* About stats-section 3-row infinite carousel */
          .daum-marquee {
            position: relative;
            overflow: hidden;
            border-radius: 16px;
          }
          .daum-marquee__track {
            display: flex;
            align-items: center;
            gap: 14px;
            width: max-content;
            padding: 6px 0;
            will-change: transform;
            animation: daum-marquee-left 26s linear infinite;
          }
          .daum-marquee--slow .daum-marquee__track {
            animation-duration: 34s;
          }
          .daum-marquee--right .daum-marquee__track {
            animation-name: daum-marquee-right;
          }
          .daum-marquee--left .daum-marquee__track {
            animation-name: daum-marquee-left;
          }
          .daum-marquee__item {
            flex: 0 0 auto;
          }
          .daum-marquee__fade {
            pointer-events: none;
            position: absolute;
            top: 0;
            bottom: 0;
            width: 56px;
            z-index: 2;
          }
          .daum-marquee__fade--left {
            left: 0;
            background: linear-gradient(
              90deg,
              rgba(15, 23, 42, 1) 0%,
              rgba(15, 23, 42, 0) 100%
            );
          }
          .daum-marquee__fade--right {
            right: 0;
            background: linear-gradient(
              270deg,
              rgba(15, 23, 42, 1) 0%,
              rgba(15, 23, 42, 0) 100%
            );
          }
          @keyframes daum-marquee-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          @keyframes daum-marquee-right {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .daum-marquee__track {
              animation: none !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>


      <section
        ref={visionSectionRef}
        className="relative min-h-screen overflow-hidden bg-[#0f172a]"
      >
        <Image
          src="/images/about/hero2.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: visionProgress }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-black/30"
          style={{ opacity: visionProgress }}
          aria-hidden
        />
        <div
          className="relative z-10 flex min-h-screen items-center justify-center px-4"
          style={{
            opacity: visionProgress,
            transform: `translateY(${8 * (1 - visionProgress)}px)`,
          }}
        >
          <div className="max-w-2xl rounded-2xl bg-slate-900/80 px-8 py-10 backdrop-blur-sm md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Vision
            </p>
            <p className="mt-6 text-lg leading-loose text-white md:text-xl">
            장례를 평생의 보람으로 살아온 우리는 
              <br />
            장례를 한 가지 기준으로 생각합니다.
              <br />
              <br />
              사람다운 장례여야 한다는 것.
              <br />
              <br />
              부담되는 비용 대신 합리적인 선택을,
              <br />
              복잡한 치레 대신 전문성과 진심을 담아,
              <br />
              사랑하는 가족이 이별의 순간에 온전히 집중할 수 있도록 돕습니다.
              <br />
              <br />
              그것이 다움 장례지도사들의 평생 소명입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="relative min-h-[100vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]" aria-hidden />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 50%, #000000 0%, rgba(15, 23, 42, 0.4) 45%, transparent 75%)`,
          }}
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center gap-12 px-4 pb-24 pt-16 text-center sm:gap-16 sm:pt-20">
          <h1 className="text-lg font-bold leading-loose text-white sm:text-lg md:text-3xl sm:leading-loose">
            다움상조는 오늘도
            <br />
            사람답고 아름다운 이별을 준비합니다.
          </h1>

          <div
            className="w-full max-w-md text-left md:max-w-xl"
            aria-label="연혁"
          >
            <div className="flex">
              <div className="flex flex-col">
                {COMPANY_HISTORY.map((entry, index) => (
                  <div
                    key={entry.year}
                    className={cn(
                      "flex min-h-20 items-center justify-end py-2 pr-5 text-right text-xl tabular-nums md:pr-6 md:text-2xl",
                      index === 0
                        ? "font-semibold text-white"
                        : "font-normal text-white/35",
                    )}
                  >
                    {entry.year}
                  </div>
                ))}
              </div>

              <div className="relative w-5 shrink-0 md:w-6">
                <div
                  className="absolute left-1/2 top-10 bottom-10 w-px -translate-x-1/2 bg-white/25"
                  aria-hidden
                />
                {COMPANY_HISTORY.map((entry, index) => (
                  <div
                    key={entry.year}
                    className="flex min-h-20 items-center justify-center"
                  >
                    <span
                      className={cn(
                        "shrink-0 rounded-full border-2",
                        index === 0
                          ? "h-3.5 w-3.5 border-white bg-transparent"
                          : "h-2 w-2 border-transparent bg-white/40",
                      )}
                      aria-hidden
                    />
                  </div>
                ))}
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                {COMPANY_HISTORY.map((entry) => (
                  <div
                    key={entry.year}
                    className="flex min-h-20 flex-col justify-center py-2 pl-1 md:pl-2"
                  >
                    <p className="text-sm text-white/45 md:text-base">
                      {entry.dateLabel}
                    </p>
                    <p className="mt-1 text-base font-medium text-white md:text-lg">
                      {entry.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <button
            type="button"
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/90 transition hover:text-white"
            aria-label="아래로 스크롤"
          >
            <ChevronDown className="h-8 w-8" strokeWidth={2} />
          </button> */}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
