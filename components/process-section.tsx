import { ClipboardList, Phone, Calendar, Heart } from "lucide-react";

const steps = [
  { icon: Phone, title: "임종 접수", desc: "24시간 전화 또는 채팅으로 접수" },
  { icon: ClipboardList, title: "상담 및 견적", desc: "상황에 맞는 장례 방식과 비용 안내" },
  { icon: Calendar, title: "장례 진행", desc: "장례식장 연계 및 절차 안내" },
  { icon: Heart, title: "추모", desc: "장지(납골당) 추천 및 후속 안내" },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            장례 절차
          </h2>
          <p className="mt-3 text-stone-600">
            단계별로 안내해 드립니다
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 text-stone-600">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="mt-4 font-semibold text-stone-900">{step.title}</p>
                <p className="mt-1 text-sm text-stone-600">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-7 hidden lg:block">
                    <span className="text-stone-300">→</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
