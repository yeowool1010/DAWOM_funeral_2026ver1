"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export type ProductDetailModalContent = {
  title: string;
  description: string;
} | null;

type ProductDetailModalProps = {
  content: ProductDetailModalContent;
  onClose: () => void;
  titleId?: string;
};

export function ProductDetailModal({
  content,
  onClose,
  titleId = "product-detail-modal-title",
}: ProductDetailModalProps) {
  useEffect(() => {
    if (!content) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [content, onClose]);

  if (!content) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="모달 닫기"
      />
      <div
        className="relative z-10 w-full max-w-sm select-text rounded-3xl bg-white px-6 pb-6 pt-8 text-center shadow-2xl sm:max-w-md sm:px-8 sm:pb-8 sm:pt-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 sm:h-16 sm:w-16">
          <AlertCircle
            className="h-8 w-8 text-red-600 sm:h-9 sm:w-9"
            strokeWidth={2.25}
            aria-hidden
          />
        </div> */}
        <h2
          id={titleId}
          className="mt-5 text-lg font-bold text-slate-900 sm:mt-6 sm:text-xl"
        >
          {content.title}
        </h2>
        <p className="mt-3 whitespace-pre-line text-center text-sm font-normal leading-relaxed text-slate-800 sm:text-base">
          {content.description}
        </p>
        <div className="mt-8 flex gap-3 sm:mt-10">
          {/* <button
            type="button"
            onClick={onClose}
            className="min-h-11 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50 sm:min-h-12 sm:text-base"
          >
            취소
          </button> */}
          <button
            type="button"
            onClick={onClose}
            className="min-h-11 flex-1 rounded-xl bg-[#03C75A] px-4 text-sm font-medium text-white transition hover:bg-[#02b350] sm:min-h-12 sm:text-base"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

/** 구성 카드 클릭 시 모달 본문: name2 우선, 없으면 desc·price 조합 */
export function getCompositionCardDescription(item: {
  name2?: string;
  desc?: string;
  price?: string;
}): string {
  const n2 = item.name2?.trim();
  if (n2) return n2;
  const parts = [item.desc?.trim(), item.price?.trim()].filter(Boolean);
  return parts.join("\n\n");
}

export function compositionCardHasDetail(item: {
  name2?: string;
  desc?: string;
  price?: string;
}): boolean {
  return getCompositionCardDescription(item).length > 0;
}
