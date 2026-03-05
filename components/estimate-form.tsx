"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

const REGIONS = [
  "서울", "경기", "부산", "대구", "인천", "광주", "대전", "울산", "세종",
  "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주",
];

const MOURNER_OPTIONS = [
  { value: "0", label: "0명(무빈소)" },
  { value: "50", label: "50명 내외" },
  { value: "100", label: "100명 내외" },
  { value: "200", label: "200명 이상" },
  { value: "unknown", label: "모르겠어요" },
];

const SITUATION_OPTIONS = [
  { value: "early", label: "긴급하지 않지만 미리 알아보려고 해요." },
  { value: "week", label: "1주에서 한 달 정도 기간이 남은 것 같아요." },
  { value: "days", label: "임종이 며칠 남지 않았어요." },
  { value: "now", label: "임종하신 상태입니다." },
];

export function EstimateForm() {
  const [region, setRegion] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [mourners, setMourners] = useState("");
  const [situation, setSituation] = useState("");

  return (
    <section id="estimate" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            장례 비용 알아보기
          </h2>
          <p className="mt-3 text-stone-600">
            비용을 미리 알아본 사람들은 장례 비용을 평균{" "}
            <span className="font-semibold text-stone-900">246만원</span> 아끼고
            있어요
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-stone-200 bg-stone-50/50 p-6 shadow-sm sm:p-8">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                장례 예상 지역
              </label>
              <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
                >
                  <option value="">시/도</option>
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <select
                  value={subRegion}
                  onChange={(e) => setSubRegion(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
                >
                  <option value="">지역을 선택해주세요.</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                조문객 수
              </label>
              <select
                value={mourners}
                onChange={(e) => setMourners(e.target.value)}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
              >
                <option value="">조문객 수</option>
                {MOURNER_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                현재 상황
              </label>
              <select
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
              >
                <option value="">선택해주세요</option>
                {SITUATION_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 py-4 text-base font-medium text-white transition hover:bg-stone-800"
            >
              <Calculator className="h-5 w-5" />
              이 조건으로 장례 비용 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
