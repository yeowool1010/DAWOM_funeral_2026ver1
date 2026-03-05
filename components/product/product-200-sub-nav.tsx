"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "전체상품", href: "/products" },
  { label: "무빈소", href: "/products/mubinsosang-130" },
  { label: "가족장", href: "/products/gajokjang-200" },
  { label: "고급형", href: "/products/gogeuphyeong-330" },
  { label: "프리미엄", href: "/products/premium-430" },
  { label: "다움프라임", href: "/prime" },
  { label: "자주묻는질문", href: "/products#faq" },
  // { label: "회사소개", href: "/products#about" },
];

export function ProductSubNav200() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-16 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl justify-center gap-8 px-4 py-4 sm:px-6">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition ${
              pathname === item.href || (pathname === "/products" && item.href === "/products")
                ? "text-stone-900"
                : "text-stone-500 hover:text-stone-800"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
