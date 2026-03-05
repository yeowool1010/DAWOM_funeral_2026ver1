import Link from "next/link";
import { BadgeCheck, FileCheck, Calculator, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "월 100원으로 평생 장례 비용 보장",
    subtitle: "납입금 부담없는 가격 보장형 후불제 상조",
    href: "/prime",
    cta: "100원 상조 알아보기",
    badge: "NEW",
    icon: BadgeCheck,
  },
  {
    title: "임종 준비 체크리스트 받아보기",
    subtitle:
      "가까운 분의 임종을 앞두고 있을 때 확인해야 할 내용들과 예상 견적표를 보내드려요",
    href: "#",
    cta: "체크리스트 신청하기",
    icon: FileCheck,
  },
  // {
  //   title: "장례 예상 견적 계산하기",
  //   subtitle: "장례 견적 미리 확인해 보고 내 상황에 따른 상품 추천도 받아보세요",
  //   href: "/estimate",
  //   cta: "자세히 알아보기",
  //   icon: Calculator,
  // },
];

export function PromoCards() {
  return (
    <section className="bg-stone-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                {card.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-amber-500 px-2.5 py-0.5 text-xs font-medium text-white">
                    {card.badge}
                  </span>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-600 group-hover:bg-stone-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-stone-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{card.subtitle}</p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-stone-800 hover:text-stone-600"
                >
                  {card.cta}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
