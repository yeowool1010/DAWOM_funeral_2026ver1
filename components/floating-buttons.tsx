"use client";

import { KakaoInquiryButton } from "@/components/kakao-inquiry-button";
import { NaverReservationButton } from "@/components/naver-reservation-button";
import { NaverTalkTalkButton } from "@/components/naver-talktalk-button";

export function FloatingButtons() {
  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col-reverse items-end gap-3"
      aria-label="바로가기"
    >
      <KakaoInquiryButton />
      <NaverReservationButton />
      <NaverTalkTalkButton />
    </div>
  );
}
