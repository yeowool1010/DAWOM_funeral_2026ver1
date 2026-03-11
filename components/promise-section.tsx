import { Tag, Globe, Receipt, ShieldCheck } from "lucide-react";

const promises = [
  {
    num: 1,
    title: "합리적인 가격으로 모십니다",
    description:
      "합리적인 가격과 고품격 서비스로 고객감동의 서비스를 추구합니다.",
    icon: Tag,
  },
  {
    num: 2,
    title: "전국 모든지역 이용이 가능합니다.",
    description:
      "국가 공인 장례지도사들을 전국네트워크망을 구축하여 24시간 운영하고 있습니다.",
    icon: Globe,
  },
  {
    num: 3,
    title: "서비스 완료 후 정산합니다",
    description:
      "회원 가입비나 월 납입금에 대한 부담이 전혀 없는 완전후불제를 실시하고 있습니다.",
    icon: Receipt,
  },
  {
    num: 4,
    title: "신뢰성을 자랑합니다",
    description:
      "기업, 단체들과 협약하고 있으며, 믿고 맡길 수 있는 신뢰의 서비스를 제공합니다.",
    icon: ShieldCheck,
  },
];

export function PromiseSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-stone-900 sm:text-3xl">
          완전후불제 다움상조
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((promise) => {
            const Icon = promise.icon;
            return (
              <div
                key={promise.num}
                className="flex flex-col rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden"
              >
                <div className="flex h-40 w-full items-center justify-center rounded-t-2xl bg-stone-100 text-stone-600">
                  <Icon className="h-14 w-14" strokeWidth={1.5} />
                </div>
                <div className="relative flex flex-col p-5 pt-8">
                  <span className="absolute -top-4 left-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-800 text-sm font-bold text-white shadow">
                    {promise.num}
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">
                    {promise.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {promise.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
