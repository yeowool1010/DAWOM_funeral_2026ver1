const steps = [
  { num: "1", title: "가입", desc: "월 100원으로 다움 프라임에 가입합니다." },
  { num: "2", title: "납입", desc: "300개월 동안 매달 100원씩 납입합니다." },
  { num: "3", title: "이용", desc: "필요 시 장례 서비스를 이용하고, 차액을 후불로 납부합니다." },
];

export function PrimeHowItWorks() {
  return (
    <section className="bg-stone-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-stone-900 sm:text-3xl">
          이용 방법
        </h2>
        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:justify-between">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-1 flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-lg font-bold text-white">
                {step.num}
              </div>
              <h3 className="mt-4 font-semibold text-stone-900">{step.title}</h3>
              <p className="mt-2 max-w-[200px] text-sm text-stone-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
