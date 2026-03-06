import Link from "next/link";
import { Phone } from "lucide-react";

export function ReviewCtaStrip() {
  return (
    <section className="bg-stone-900 py-4 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-center text-sm font-medium sm:text-base">
          연중무휴 24시간 대기하고 있습니다
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/estimate"
            className="rounded-full border border-white bg-transparent px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-stone-900"
          >
            견적 받기
          </Link>
          <a
            href="tel:1600-4417"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:bg-stone-100"
          >
            <Phone className="h-4 w-4" />
            전화 문의
          </a>
        </div>
      </div>
    </section>
  );
}
