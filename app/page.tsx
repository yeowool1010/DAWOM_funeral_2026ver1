import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { PromoCards } from "@/components/promo-cards";
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
        <PromoCards />
        <FirstTimeSection />
        <PromiseSection />
        <CtaSection />
        <SiteFooter />
      </main>
    </div>
  );
}
