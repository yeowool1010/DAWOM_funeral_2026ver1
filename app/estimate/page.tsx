import { SiteHeader } from "@/components/site-header";
import { EstimateForm } from "@/components/estimate-form";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "장례견적 | 다움 장례연구소",
  description: "지역, 조문객 수, 상황에 맞는 장례 비용 견적을 받아보세요.",
};

export default function EstimatePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <EstimateForm />
      </main>
      <SiteFooter />
    </div>
  );
}
