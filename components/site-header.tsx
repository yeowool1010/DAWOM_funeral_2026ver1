"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "상품안내", href: "/products" },
  { label: "장례절차", href: "/process" },
  { label: "고객후기", href: "/reviews" },
  { label: "회사소개", href: "/about" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-stone-800">
          <span className="text-xl">다움</span>
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

        <div className="flex items-center gap-4">
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
              href="tel:1600-4417"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-stone-900 py-3 text-sm font-medium text-white"
            >
              <Phone className="h-4 w-4" />
              24시간 고객센터
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
