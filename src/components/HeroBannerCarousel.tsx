import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import banner1 from "../assets/Banner 1.webp";
import banner2 from "../assets/Banner 2.webp";

const banners = [banner1, banner2];

export function HeroBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? banners.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex >= banners.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
  <div className="relative w-full max-w-[19rem] md:max-w-[87rem] mx-auto mb-0 group">
  <Card className="relative overflow-hidden border-0 shadow-none bg-transparent">
    <img
      src={banners[currentIndex]}
      alt={`Banner ${currentIndex + 1}`}
      className="w-full h-full object-cover rounded-xl"
    />

    {/* Botão Esquerda */}
    <Button
      variant="ghost"
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
                 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 bg-transparent hover:bg-transparent hover:text-white w-14 h-14"
      onClick={goToPrevious}
    >
      <ChevronLeft className="w-12 h-12" />
    </Button>

    {/* Botão Direita */}
    <Button
      variant="ghost"
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
                 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 bg-transparent hover:bg-transparent hover:text-white w-14 h-14"
      onClick={goToNext}
    >
      <ChevronRight className="w-12 h-12" />
    </Button>

    {/* Indicadores (bolinhas dentro do banner) */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
      {banners.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            setIsAutoPlaying(false);
            setCurrentIndex(index);
            setTimeout(() => setIsAutoPlaying(true), 3000);
          }}
          className={`w-1 h-1 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? "bg-white scale-125"
              : "bg-white/40 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  </Card>
</div>

  );
}
