import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            우리 가족답게
            <br />
            <span className="text-stone-600">추모하는 방법</span>
          </h1>
          <p className="mt-4 text-stone-600">
            막막한 상황, 다움이 함께 합니다. 장례식장, 장지 추천부터 상조 서비스,
            장례 상담, 임종 접수까지.
          </p>
          <Link
            href="/estimate"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            자세히 보기
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 lg:aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80"
            alt="조용하고 평화로운 공간"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
