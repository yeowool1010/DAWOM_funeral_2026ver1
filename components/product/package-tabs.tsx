"use client";

import { useState } from "react";

const tabs = [
  { id: "monthly", label: "월 납입 상품" },
  { id: "contract", label: "계약금 상품" },
];

export function PackageTabs() {
  const [active, setActive] = useState("monthly");

  return (
    <div className="border-b border-stone-200">
      <div className="mx-auto flex max-w-6xl gap-1 px-4 sm:px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`border-b-2 px-6 py-4 text-sm font-medium transition ${
              active === tab.id
                ? "border-stone-900 text-stone-900"
                : "border-transparent text-stone-500 hover:text-stone-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
