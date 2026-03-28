"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { MapPin } from "lucide-react";
import { REVIEW_TAGS, REVIEW_REGIONS } from "@/lib/reviews";

export function ReviewListFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const region = searchParams.get("region") ?? "전체";
  const tag = searchParams.get("tag") ?? "전체보기";

  function updateParams(updates: { region?: string; tag?: string; page?: string }) {
    const next = new URLSearchParams(searchParams.toString());
    if (updates.region !== undefined) next.set("region", updates.region);
    if (updates.tag !== undefined) next.set("tag", updates.tag);
    if (updates.page !== undefined) next.set("page", updates.page);
    else next.delete("page");
    router.push(`/reviews?${next.toString()}`);
  }

  return (
    <div className="border-b border-stone-200 bg-white py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6">
          {/* <div className="flex flex-wrap items-center gap-3">
            <MapPin className="h-5 w-5 text-stone-500" />
            <span className="text-sm font-medium text-stone-700">
              지역별 후기 보기
            </span>
            <select
              value={region}
              onChange={(e) => updateParams({ region: e.target.value })}
              className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-800 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
            >
              {REVIEW_REGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div> */}
          {/* <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => updateParams({ tag: "전체보기" })}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                tag === "전체보기"
                  ? "bg-stone-800 text-white"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              전체보기
            </button>
            {REVIEW_TAGS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => updateParams({ tag: t })}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  tag === t
                    ? "bg-stone-800 text-white"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                #{t}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
