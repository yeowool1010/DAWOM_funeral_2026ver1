import { SiteHeader } from "@/components/site-header";
import { ProductSubNav } from "@/components/product/product-sub-nav";
import { ProductBanner } from "@/components/product/product-banner";
import { PackageTabs } from "@/components/product/package-tabs";
import { PackageCards } from "@/components/product/package-cards";
import { PrimeSection } from "@/components/product/prime-section";
import { FirstSection } from "@/components/product/first-section";
import { ProductCta } from "@/components/product/product-cta";
import { ProductFaqSection } from "@/components/product/product-faq-section";
import { ProductAboutSection } from "@/components/product/product-about-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "상품안내 | 다움상조",
  description:
    "100원부터 시작하는 장례 준비, 200만원대 다움 220 상조 패키지부터 알아보세요. 다움 상조 상품 한눈에 보기.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <ProductSubNav />
      <main>
        {/* <ProductBanner /> */}
        {/* <PackageTabs /> */}
        <PackageCards />
        {/* <PrimeSection /> */}
       {/*  <FirstSection />/ */}
       {/*  <ProductCta /> */}
        {/* <ProductFaqSection /> */}
        {/*  <ProductAboutSection />*/}
      </main>
      <SiteFooter />
    </div>
  );
}
