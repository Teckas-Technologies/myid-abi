import { BuySteps } from "@/components/BuySteps/BuySteps";
import { Exchanges } from "@/components/Exchanges/Exchanges";
import { Features } from "@/components/Features/Features";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Info } from "@/components/Info/Info";
import { Tokenomics } from "@/components/Tokenomics/Tokenomics";

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center overflow-x-hidden">
      <Header />
      <Hero />
      <Info />
      <Features />
      <Tokenomics />
      <Exchanges />
      <BuySteps />
      <Footer />
    </main>
  );
}
