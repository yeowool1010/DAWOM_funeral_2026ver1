import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { EstimateForm } from "@/components/estimate-form";
import { PromoCards } from "@/components/promo-cards";
import { ProductsSection } from "@/components/products-section";
import { ProcessSection } from "@/components/process-section";
import { ReviewsSection } from "@/components/reviews-section";
import { FirstTimeSection } from "@/components/first-time-section";
import { PromiseSection } from "@/components/promise-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <EstimateForm />
        <PromoCards />
        <ProductsSection />
        <ProcessSection />
        <ReviewsSection />
        <FirstTimeSection />
        <PromiseSection />
        <CtaSection />
        <SiteFooter />
      </main>
    </div>
  );
}
