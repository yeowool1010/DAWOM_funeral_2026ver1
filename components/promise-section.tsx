import { Shield, Receipt, RefreshCw } from "lucide-react";

const promises = [
  {
    title: "품목별 가격 정찰제",
    description:
      "업계 최초로 모든 품목에 가격 정찰제를 도입하여 실제로 사용한 품목만 비용만 받습니다.",
    icon: Receipt,
  },
  {
    title: "사용하지 않는 품목 100% 공제",
    description:
      "패키지 내 사용하지 않은 품목에 대해 명시된 금액만큼 100% 현금으로 공제해 드립니다.",
    icon: RefreshCw,
  },
  {
    title: "서비스 불만족시 100% 환불",
    description:
      "다움은 장례 용품 강매, 노잣돈 및 수고비 강요와 같은 부적절한 행위를 엄격히 금지하고 있으며 불만족스러운 부분은 100% 환불해 드립니다.",
    icon: Shield,
  },
];

export function PromiseSection() {
  return (
    <section className="bg-stone-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            다움의 변하지 않는 약속
          </h2>
          <p className="mt-3 text-stone-600">
            장례를 장례답게 만들기 위한 최소한의 원칙이에요
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {promises.map((promise) => {
            const Icon = promise.icon;
            return (
              <div
                key={promise.title}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-stone-900">
                  {promise.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{promise.description}</p>
              </div>
            );
          })}
        </div>
        {/* <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            다움 표준 서비스 바로가기
          </a>
        </div> */}
      </div>
    </section>
  );
}
