"use client";

import { useMemo, useState } from "react";
import {
  PROCESS_TAB_FILTERS,
  filterProcessPosts,
  type ProcessTabFilter,
} from "@/lib/process-posts";
import { ProcessPostCard } from "@/components/process/process-post-card";
import { cn } from "@/lib/utils";

export function ProcessArticleList() {
  const [active, setActive] = useState<ProcessTabFilter>("전체");

  const posts = useMemo(() => filterProcessPosts(active), [active]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        className="flex flex-wrap justify-center gap-2 sm:justify-start sm:gap-3"
        role="tablist"
        aria-label="장례 정보 분류"
      >
        {PROCESS_TAB_FILTERS.map((label) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(label)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition sm:px-5 sm:text-base",
                isActive
                  ? "bg-stone-900 text-white"
                  : "border border-stone-200 bg-white text-stone-900 hover:border-stone-300",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {posts.length === 0 ? (
        <p className="mt-12 py-16 text-center text-stone-500">
          이 분류에 등록된 글이 없습니다.
        </p>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, index) => (
            <li key={post.slug}>
              <ProcessPostCard post={post} index={index} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
