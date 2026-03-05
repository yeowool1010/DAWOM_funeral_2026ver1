"use client";

import Link from "next/link";

// 카카오톡 오픈채팅 URL (환경변수로 변경 가능)
const KAKAO_INQUIRY_URL =
  process.env.NEXT_PUBLIC_KAKAO_INQUIRY_URL || "https://open.kakao.com/o/sbvElWji";

export function KakaoInquiryButton() {
  return (
    <Link
      href={KAKAO_INQUIRY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FEE500] focus:ring-offset-2"
      aria-label="카카오톡으로 문의하기"
      title="카카오톡 문의"
    >
      {/* 카카오톡 말풍선 아이콘 */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4a3 3 0 00-3 3v8a3 3 0 003 3h1v3c0 .28.15.54.38.67.24.14.53.12.74-.05l3.26-3.26H19a3 3 0 003-3V7a3 3 0 00-3-3H5zm0 2h14a1 1 0 011 1v8a1 1 0 01-1 1h-7.34L8.66 19V18H5a1 1 0 01-1-1V7a1 1 0 011-1z"
          fill="#191919"
        />
      </svg>
      <span className="sr-only">카카오톡으로 문의하기</span>
    </Link>
  );
}
