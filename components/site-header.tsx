"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { HeaderAuth } from "@/components/header-auth";

function KakaoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3Z" />
    </svg>
  );
}

const navItems = [
  { label: "상품안내", href: "/products" },
  { label: "장례정보", href: "/process" },
  { label: "고객후기", href: "/reviews" },
  { label: "회사소개", href: "/about" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-stone-800">
          <Image
            src="/images/logo1.png"
            alt="다움 로고 1"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
          <Image
            src="/images/logo2.png"
            alt="다움 로고 2"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex">
            <HeaderAuth />
          </div>
          {/* <a
            href="https://pf.kakao.com/_xXXXXXXX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#FEE500] px-4 py-2 text-sm font-medium text-stone-900 transition hover:bg-[#FADA0A] sm:flex"
            aria-label="카카오톡 상담"
          >
            <KakaoIcon className="h-5 w-5" />
            카톡상담
          </a> */}
          <a
            href="tel:1600-4417"
            className="hidden items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800 sm:flex"
          >
            <Phone className="h-4 w-4" />
            24시간 고객센터
          </a>
          <button
            type="button"
            className="rounded p-2 text-stone-600 hover:bg-stone-100 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://pf.kakao.com/_xXXXXXXX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#FEE500] py-3 text-sm font-medium text-stone-900"
              onClick={() => setMobileOpen(false)}
            >
              <KakaoIcon className="h-5 w-5" />
              카톡상담
            </a>
            <a
              href="tel:1600-4417"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-stone-900 py-3 text-sm font-medium text-white"
            >
              <Phone className="h-4 w-4" />
              24시간 고객센터
            </a>
            <div className="mt-4 flex flex-col gap-2 border-t border-stone-100 pt-4">
              <HeaderAuth />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
