"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "전체상품", href: "/products" },
  { label: "다움프라임", href: "/prime" },
  { label: "자주묻는질문", href: "/products#faq" },
  // { label: "회사소개", href: "/products#about" },
];

export function ProductSubNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-stone-200 bg-white">
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
