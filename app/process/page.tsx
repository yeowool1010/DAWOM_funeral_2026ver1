import { SiteHeader } from "@/components/site-header";
import { ProcessSection } from "@/components/process-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "장례절차 | 다움상조",
  description: "임종 접수부터 추모까지, 단계별 장례 절차를 안내합니다.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ProcessSection />
      </main>
      <SiteFooter />
    </div>
  );
}
