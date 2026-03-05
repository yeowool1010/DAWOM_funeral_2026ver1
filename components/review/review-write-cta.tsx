import Link from "next/link";
import { MessageSquarePlus } from "lucide-react";

export function ReviewWriteCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-stone-600">
          남겨주신 소중한 후기들은 마음 깊이 새기고, 더 깊이있는 서비스를
          제공할 수 있도록 노력하겠습니다.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
          >
            <MessageSquarePlus className="h-4 w-4" />
            장례후기 쓰기
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
          >
            <MessageSquarePlus className="h-4 w-4" />
            장례후기 쓰기
          </Link>
        </div>
      </div>
    </section>
  );
}
