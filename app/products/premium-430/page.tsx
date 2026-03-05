import { SiteHeader } from "@/components/site-header";
import { ProductSubNav430 } from "@/components/product/product-430-sub-nav";
import { PrimeHero } from "@/components/prime/prime-hero";
import { PrimeBenefits } from "@/components/prime/prime-benefits";
import { PrimeHowItWorks } from "@/components/prime/prime-how-it-works";
import { PrimeCta } from "@/components/prime/prime-cta";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "똑똑한 소비자를 위한 100원 상조 | 다움 프라임",
  description:
    "월 100원으로 시작하는 다움 프라임. 납입금 부담 없이 가격 보장형 후불제 상조로 장례 비용을 미리 준비하세요.",
};

export default function PrimePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <ProductSubNav430 />
      <main>
        <PrimeHero />
        <PrimeBenefits />
        <PrimeHowItWorks />
        <PrimeCta />
      </main>
      <SiteFooter />
    </div>
  );
}
