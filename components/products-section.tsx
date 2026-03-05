import Link from "next/link";
import { Package, ChevronRight } from "lucide-react";
import Image from "next/image";

export function ProductsSection() {
  return (
    <section id="products" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
              다움 상품 안내
            </h2>
            <p className="mt-4 text-stone-600">
              조문객 없이 장례 진행하는 무빈소장부터 200명이 넘는 조문객도
              문제없는 일반장까지
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-stone-800 font-medium hover:text-stone-600"
            >
              자세히 알아보기
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-stone-100 lg:max-w-md">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="상담 이미지"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-stone-900/20">
              <div className="rounded-full bg-white/90 p-4">
                <Package className="h-10 w-10 text-stone-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
