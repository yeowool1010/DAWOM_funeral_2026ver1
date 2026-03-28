import Link from "next/link";
import type { ProcessPost } from "@/lib/process-posts";
import { ProcessCardFigure } from "@/components/process/process-card-figure";
import { cn } from "@/lib/utils";

const THUMB_BG: Record<ProcessPost["thumbTone"], string> = {
  slate: "bg-slate-200",
  sky: "bg-sky-100",
  amber: "bg-amber-100",
  mint: "bg-emerald-100",
  rose: "bg-rose-100",
};

type ProcessPostCardProps = {
  post: ProcessPost;
  index: number;
};

export function ProcessPostCard({ post, index }: ProcessPostCardProps) {
  return (
    <Link
      href={`/process/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm outline-none ring-stone-900/5 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2"
    >
      <div
        className={cn(
          "relative min-h-[11.5rem] rounded-t-2xl px-4 pb-3 pt-4 sm:min-h-[13rem] sm:px-5 sm:pt-5",
          THUMB_BG[post.thumbTone],
        )}
      >
        <div className="flex items-center gap-2">
          <span className="shrink-0 text-sm font-bold text-stone-900">
            {post.subCategory}
          </span>
          <div className="h-1 flex-1 bg-stone-900" aria-hidden />
        </div>
        <div className="mt-3 flex justify-between gap-3 sm:mt-4">
          <p className="max-w-[58%] whitespace-pre-line text-left text-lg font-bold leading-snug tracking-tight text-stone-900 sm:text-xl">
            {post.headline}
          </p>
          <div className="flex shrink-0 items-end">
            <ProcessCardFigure seed={index} />
          </div>
        </div>
      </div>
      <div className="border-t border-stone-100 bg-white px-4 py-4 sm:px-5">
        <h3 className="text-base font-medium leading-snug text-stone-900 group-hover:underline">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-stone-500">
          {post.mainCategory} | {post.subCategory} | {post.date}
        </p>
      </div>
    </Link>
  );
}
