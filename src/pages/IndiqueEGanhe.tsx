import { useState } from "react";
import { HeroBannerCarousel } from "../components/HeroBannerCarousel";
import { Navbar } from "../components/Navbar";
import { CardBannerCarousel } from "../components/CardBannerCarousel";
import { Highlights } from "../components/Highlights";
import { Footer } from "../components/Footer";
import { LoginDialog } from "../components/LoginDialog";

const IndiqueEGanhe = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // controle simples

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <Navbar onLoginClick={() => setLoginOpen(true)} />

      <main className="md:pt-5 pb-12 space-y-16 bg-[#171717] mx-4 rounded-[12px]">
        {!isLoggedIn ? (
          // Se não estiver logado
          <section className="px-4 pt-[60px]">
            <div className="require-auth-page w-full pt-6 py-20 sm:py-20 flex flex-col items-center">
              <img
                alt="Acesso restrito"
                className="mx-auto mb-3 object-contain size-96"
                src="/img/auth-CRzabI1Q.png"
              />
              <div className="text-2xl font-medium text-center mb-8 text-foreground">
                Acesse sua conta para acessar esta página
              </div>
              <button
                onClick={() => setLoginOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 cursor-pointer"
              >
                Entrar
              </button>
              <button
                onClick={() => window.location.href = "/"}
                className="text-primary mt-5 hover:underline cursor-pointer"
              >
                Ir para página inicial
              </button>
            </div>
          </section>
        ) : (
          // Se estiver logado
          <section className="md:px-14 pt-6 md:pt-[2rem]">
            {/* Aqui você pode usar os mesmos componentes do Index */}
            <HeroBannerCarousel />
            <CardBannerCarousel />
            <Highlights />
            {/* Qualquer outro conteúdo da página */}
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Login Dialog */}
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
};

export default IndiqueEGanhe;
