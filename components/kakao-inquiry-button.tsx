"use client";

import Link from "next/link";
import Image from "next/image";

const KAKAO_INQUIRY_URL =
  process.env.NEXT_PUBLIC_KAKAO_INQUIRY_URL || "https://open.kakao.com/o/sbvElWji";

export function KakaoInquiryButton() {
  return (
    <Link
      href={KAKAO_INQUIRY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFE000] pl-0 pr-0 shadow-[4px_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:w-[180px] hover:justify-start hover:gap-2 hover:pl-4 hover:pr-5 hover:shadow-[6px_6px_20px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-[#FFE000] focus:ring-offset-2"
      aria-label="카카오톡 상담"
      title="카톡상담"
    >
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
        <Image
          src="/images/kakao.png"
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
          aria-hidden
        />
      </span>
      <span className="max-w-0 shrink overflow-hidden whitespace-nowrap font-semibold text-stone-900 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:max-w-[120px] group-hover:opacity-100">
        카톡상담
      </span>
    </Link>
  );
}
