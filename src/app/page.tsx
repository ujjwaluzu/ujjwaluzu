import { AbstractBackground } from "@/components/abstract-background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden bg-paper">
      <AbstractBackground />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <Header />

        <main className="flex flex-1 flex-col items-center justify-center gap-16 px-6 pb-6 pt-14 sm:gap-20 sm:pt-20">
          <HeroSection />
          <SocialLinks />
        </main>

        <Footer />
      </div>
    </div>
  );
}