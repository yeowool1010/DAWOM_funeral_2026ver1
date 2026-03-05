import Link from "next/link";
import { BookOpen, Scale, ChevronRight } from "lucide-react";

const items = [
  {
    title: "처음하는 장례 준비 어떻게 해야 후회 없을까요?",
    subtitle: "장례 준비의 A to Z",
    href: "#",
    icon: BookOpen,
  },
  {
    title: "선불? 후불? 나에게 맞는 서비스 찾기",
    subtitle: "선불/후불 비교하기",
    href: "#",
    icon: Scale,
  },
];

export function FirstTimeSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-stone-900 sm:text-3xl">
          장례 준비가 처음이라면
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-start gap-4 rounded-2xl border border-stone-200 bg-stone-50/50 p-6 transition hover:border-stone-300 hover:bg-stone-50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-200 text-stone-600 group-hover:bg-stone-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-stone-900 group-hover:text-stone-700">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-600">{item.subtitle}</p>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-stone-400 group-hover:text-stone-600" />
              </Link>
            );
          })}
        </div>
        <div className="mt-12 rounded-2xl bg-stone-900 p-8 text-center text-white">
          <p className="text-lg font-medium">가입 상품으로 장례 비용을 아껴보세요</p>
          <p className="mt-2 text-stone-300">
            미리 준비하는 장례 월 100원으로 충분해요
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-stone-900"
          >
            100원 상조 알아보기
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
