import { SiteHeader } from "@/components/site-header";
import { ProcessSection } from "@/components/process-section";
import { ProcessArticleList } from "@/components/process/process-article-list";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "장례정보 | 다움상조",
  description:
    "임종 접수부터 추모까지 단계별 장례 절차와, 임종 전·장례 중·이후에 알아두면 좋은 장례 정보 글을 안내합니다.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        {/* <ProcessSection /> */}
        <section className="border-t border-stone-100 bg-stone-50/80 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
              장례 정보
            </h2>
            <p className="mt-3 text-stone-600 sm:text-lg">
              상황에 맞게 골라 읽을 수 있는 안내 글입니다.
            </p>
          </div>
          <div className="mt-10 sm:mt-12">
            <ProcessArticleList />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
