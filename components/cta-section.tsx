import { MessageCircle, Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-stone-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">
          임종접수, 긴급 문의가 있으시면
          <br />
          <span className="text-stone-300">24시간 언제든 부담없이 연락해 주세요</span>
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-white bg-transparent px-6 py-4 font-medium transition hover:bg-white hover:text-stone-900 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            채팅문의
          </a>
          <a
            href="tel:0000-0000"
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-medium text-stone-900 transition hover:bg-stone-100 sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            전화문의
          </a>
        </div>
        <a
          href="#"
          className="mt-8 inline-block text-sm text-stone-400 underline hover:text-white"
        >
          다움, 믿을 만한 곳인가요? 더 알아보기
        </a>
      </div>
    </section>
  );
}
