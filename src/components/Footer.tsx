import { FC } from "react";
import logoImg from "../assets/logo.webp";

export const Footer: FC = () => {
  return (
    <footer className=" px-14 footer bg-transparent w-full text-sm mt-8">
      <div className="flex flex-col md:flex-row gap-5 mx-auto max-w-[var(--max-layout-width)] px-4 w-full h-full">
        
        {/* Logo + Direitos */}
        <div className="flex flex-col w-full md:w-[35%]">
          <div className="flex flex-col gap-4 h-full">
            <a href="/">
              <img
                className="footer-logo w-[140px] min-w-[140px] block"
                src={logoImg}
                alt="Sistema de Raspadinhas"
              />
            </a>
            <div className="text-xs opacity-65 text-gray-300">
              © 2025 Sistema de Raspadinhas. Todos os direitos reservados.
            </div>
            <div className="text-xs opacity-50 text-gray-300">
              Sistema de Raspadinhas - Sua sorte está aqui!
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="w-full md:w-[65%] flex flex-col justify-between gap-6 mt-3 sm:mt-0">
          <div className="flex flex-wrap gap-8 md:gap-6 w-full">

            {/* Regulamentos */}
            <div className="flex flex-col gap-y-0.5">
              <strong className="text-left mb-2.5 text-foreground">
                Regulamentos
              </strong>
              <div className="flex flex-col justify-center gap-3 flex-wrap [&>*]:text-sm [&>*]:opacity-70">
                <a href="/" className="footer_link text-foreground hover:opacity-100 transition-opacity">
                  Jogo responsável
                </a>
                <a href="/" className="footer_link text-foreground hover:opacity-100 transition-opacity">
                  Política de Privacidade
                </a>
                <a href="/" className="footer_link text-foreground hover:opacity-100 transition-opacity">
                  Termos de Uso
                </a>
              </div>
            </div>

            {/* Ajuda */}
            <div className="flex flex-col gap-y-0.5">
              <strong className="text-left mb-2.5 text-foreground">
                Ajuda
              </strong>
              <div className="flex flex-col justify-center gap-3 flex-wrap [&>*]:text-sm [&>*]:opacity-70">
                <a href="/" className="footer_link text-foreground hover:opacity-100 transition-opacity">
                  Perguntas Frequentes
                </a>
                <a href="/" className="footer_link text-foreground hover:opacity-100 transition-opacity">
                  Como Jogar
                </a>
                <a href="/" className="footer_link text-foreground hover:opacity-100 transition-opacity">
                  Suporte Técnico
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};
