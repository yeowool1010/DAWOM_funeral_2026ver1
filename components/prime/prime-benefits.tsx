import { Shield, Wallet, Calendar } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "월 100원 납입",
    desc: "100원씩 300개월 납입하고, 차액은 장례 후 납부합니다.",
  },
  {
    icon: Shield,
    title: "가격 보장",
    desc: "가입 시점의 요금이 보장되는 후불제 상조입니다.",
  },
  {
    icon: Calendar,
    title: "당일부터 이용",
    desc: "가입 당일부터 즉시 이용할 수 있습니다.",
  },
];

export function PrimeBenefits() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-stone-900 sm:text-3xl">
          다움 프라임이 특별한 이유
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold text-stone-900">{b.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
