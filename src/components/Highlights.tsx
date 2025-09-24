import { FC } from "react";
import { Gift, MousePointerClick } from "lucide-react";
import bannerDestaque from "../assets/bannerdestaque.webp";

interface GameCardProps {
  titulo: string;
  descricao: string;
  preco: string;
}

const GameCard: FC<GameCardProps> = ({ titulo, descricao, preco }) => {
  return (
    <div className="bg-[hsl(217,41%,9%)] rounded-xl border border-gray-800 p-3 flex flex-col gap-3 shadow-md">
      {/* Banner fixo */}
      <img
        src={bannerDestaque}
        alt={titulo}
        className="w-full h-24 rounded-md object-cover"
      />

      {/* Título e descrição */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-white">{titulo}</h3>
        <span className="text-sm text-yellow-500 font-medium uppercase">
          {descricao}
        </span>
      </div>

      {/* Botões */}
      <div className="flex items-center justify-between mt-2">
        {/* Botão Jogar */}
        <button className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-black font-bold rounded-md px-4 py-2 transition">
          <MousePointerClick size={18} />
          <span>Jogar</span>
          <div className="bg-black rounded px-2 py-0.5 text-xs flex items-center gap-1 ml-2">
            <span className="text-lime-400 font-semibold">R$</span>
            {preco}
          </div>
        </button>

        {/* Botão Ver Prêmios */}
        <button className="flex items-center gap-1 text-xs font-semibold text-white hover:text-yellow-400 active:scale-95 transition">
          <Gift size={16} />
          <span>VER PRÊMIOS</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

interface HighlightsProps {
  hideTitle?: boolean; // 👈 nova prop
}

export const Highlights: FC<HighlightsProps> = ({ hideTitle }) => {
  return (
    <section className="max-w-full mt-12">
      {!hideTitle && ( // 👈 só mostra se NÃO for true
        <h2 className="flex items-center text-2xl font-bold text-yellow-400 mb-6">
          🔥 Destaques
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <GameCard
          titulo="Centavo da Sorte"
          descricao="PRÊMIOS DE ATÉ R$ 1.000,00"
          preco="0,50"
        />
        <GameCard
          titulo="Sorte Instantânea"
          descricao="PRÊMIOS DE ATÉ R$ 2.500,00"
          preco="1,00"
        />
        <GameCard
          titulo="Raspadinha Suprema"
          descricao="PRÊMIOS DE ATÉ R$ 5.000,00"
          preco="2,00"
        />
        <GameCard
          titulo="Raspa Relâmpago"
          descricao="PRÊMIOS DE ATÉ R$ 15.000,00"
          preco="5,00"
        />
        <GameCard
          titulo="Raspadinha Mágica"
          descricao="PRÊMIOS DE ATÉ R$ 30.000,00"
          preco="50,00"
        />
      </div>
    </section>
  );
};
