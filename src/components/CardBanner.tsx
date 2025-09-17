// src/components/CardBanner.tsx
import { FC } from "react";
import cincoreais from "../assets/cincoreais.webp";

interface CardBannerProps {
  nome: string;
  premio: string;
  valor: string;
  img?: string;
}

export const CardBanner: FC<CardBannerProps> = ({
  nome,
  premio,
  valor,
  img,
}) => {
  return (
    <div className="!flex items-center justify-start gap-2 sm:gap-3 py-2 sm:py-3 px-4 sm:px-7 select-none group rounded-lg !w-auto sm:!w-[220px] md:!w-[260px] cursor-pointer hover:bg-secondary border  transition-colors">

      {/* Imagem */}
      <img
        src={img || cincoreais}
        alt={premio}
        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
      />

      {/* Texto */}
      <div className="flex flex-col min-w-0">
        <span className="font-medium text-[10px] sm:text-xs text-amber-400/75 overflow-hidden text-nowrap text-ellipsis">
          {nome}
        </span>
        <h1 className="font-medium text-[10px] sm:text-xs text-muted-foreground overflow-hidden text-nowrap text-ellipsis">
          {premio}
        </h1>
        <span className="font-semibold text-[10px] sm:text-xs text-foreground whitespace-nowrap">
          <span className="text-emerald-300">R$ </span>{valor}
        </span>
      </div>
    </div>
  );
};
