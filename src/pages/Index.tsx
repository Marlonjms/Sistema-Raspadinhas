import { useState } from "react";
import { HeroBannerCarousel } from "../components/HeroBannerCarousel";
import { Navbar } from "../components/Navbar";
import { ScratchCard } from "../components/ScratchCard";
import { RecentWinsCarousel } from "../components/RecentWinsCarousel";
import { LoginDialog } from "../components/LoginDialog";
import { ScratchResult } from "../types/prizes";
import { toast } from "sonner";
import { Highlights } from "../components/Highlights";
import { Footer } from "../components/Footer";



import { CardBannerCarousel } from "../components/CardBannerCarousel";


const Index = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleScratchResult = (result: ScratchResult) => {
    if (result.won && result.prize) {
      toast.success(
        `🎉 Parabéns! Você ganhou: ${result.prize.name} (${result.prize.value})`
      );
    } else {
      toast.error("😔 Que pena! Tente novamente na próxima.");
    }
  };

  return (
    <div className=" min-h-screen bg-black">
      <Navbar onLoginClick={() => setLoginOpen(true)} />

      <main className="  md: pt-5 pb-12 space-y-16 bg-[#171717] mx-4 rounded-[12px]">
        {/* Hero Banner Carousel */}
        <section className=" md:px-14 pt-6 md:pt-[2rem] ">
          <HeroBannerCarousel />
          <CardBannerCarousel  /> 
          {/* Destaques */}
          <Highlights />
          <ScratchCard onResult={handleScratchResult} />
        </section>
      </main>
       
       <Footer />

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
};

export default Index;
