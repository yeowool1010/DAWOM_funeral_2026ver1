"use client";

import { useState } from "react";

const situations = [
  { id: "early", label: "미리 준비하려고 해요" },
  { id: "urgent", label: "임종을 앞두거나 임종하신 상태입니다." },
  { id: "first", label: "처음 준비하신다면, 도움이 될 거예요" },
];

export function ReviewGuideSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">
                장례 준비가 처음이신가요?
              </h2>
              <p className="mt-3 text-stone-600">
                필요한 절차, 예상 비용, 준비 체크리스트를 정리한
                <br />
                &apos;다움 장례 가이드북&apos;을 5초 안에 받아보세요.
              </p>
            </div>
            <div className="w-full lg:max-w-sm">
              <p className="mb-3 text-sm font-medium text-stone-700">
                상황을 알려주세요
              </p>
              <div className="space-y-2">
                {situations.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelected(selected === s.id ? null : s.id)}
                    className={`block w-full rounded-lg border px-4 py-3 text-left text-sm transition ${
                      selected === s.id
                        ? "border-stone-900 bg-stone-50 text-stone-900"
                        : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-xs text-stone-500">
                처음 준비하신다면, 도움이 될 거예요
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
