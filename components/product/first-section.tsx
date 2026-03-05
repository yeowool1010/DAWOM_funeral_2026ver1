import Link from "next/link";
import { Shield } from "lucide-react";

const products = [
  {
    name: "다움 퍼스트3",
    tag: "#가족장289",
    desc: "딱 한 번 3만원 결제하고 차액은 장례 후 납부하기",
    cta: "가입하기",
    href: "/estimate",
  },
  {
    name: "다움 퍼스트10",
    tag: "#가족장289",
    badge: "혜택상품",
    desc: "딱 한 번 10만원 결제하고 차액은 장례 후 납부하기",
    sub: "10만원 추가 할인 최종 혜택가 2,790,000원",
    cta: "가입하기",
    href: "/estimate",
  },
];

export function FirstSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            한 번 내고 평생 보장받는 다움 퍼스트
          </h2>
          <p className="mt-3 text-stone-600">
            계약금 딱 한 번 결제로
            <br />
            미리 계약하고 장례 비용 상승에 대비할 수 있어요
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {products.map((item) => (
            <div
              key={item.name}
              className="relative rounded-2xl border border-stone-200 bg-stone-50/50 p-6 shadow-sm"
            >
              {item.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-amber-500 px-2.5 py-0.5 text-xs font-medium text-white">
                  {item.badge}
                </span>
              )}
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-stone-600">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">{item.name}</h3>
                  <span className="text-xs text-stone-500">{item.tag}</span>
                </div>
              </div>
              <p className="mt-4 text-stone-700">{item.desc}</p>
              {item.sub && (
                <p className="mt-2 text-sm font-medium text-stone-800">{item.sub}</p>
              )}
              <Link
                href={item.href}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-stone-900 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
              >
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
