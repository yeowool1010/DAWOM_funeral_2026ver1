"use client";

import Link from "next/link";
import Image from "next/image";

const NAVER_TALKTALK_URL =
  process.env.NEXT_PUBLIC_NAVER_TALKTALK_URL || "https://talk.naver.com/";

export function NaverTalkTalkButton() {
  return (
    <Link
      href={NAVER_TALKTALK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#03C75A] pl-0 pr-0 shadow-[4px_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:w-[180px] hover:justify-start hover:gap-2 hover:pl-4 hover:pr-5 hover:shadow-[6px_6px_20px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-[#03C75A] focus:ring-offset-2"
      aria-label="네이버 톡톡"
      title="네이버톡톡"
    >
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
        <Image
          src="/images/naver1.png"
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
          aria-hidden
        />
      </span>
      <span className="max-w-0 shrink overflow-hidden whitespace-nowrap font-semibold text-white opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:max-w-[120px] group-hover:opacity-100">
        네이버톡톡
      </span>
    </Link>
  );
}

