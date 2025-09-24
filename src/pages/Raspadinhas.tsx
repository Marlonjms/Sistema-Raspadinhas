import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { CardBannerCarousel } from "../components/CardBannerCarousel";
import { Highlights } from "../components/Highlights";
import { Footer } from "../components/Footer";
import { LoginDialog } from "../components/LoginDialog";

const Raspadinhas = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <Navbar onLoginClick={() => setLoginOpen(true)} />

      <main className="md:pt-5 pb-12 space-y-16 bg-[#171717] mx-4 rounded-[12px]">
        <section className="md:px-14 pt-4 md:pt-6">
          {/* Carousel de Banners  */}
          <div className="mb-11">
            <CardBannerCarousel />
          </div>

          {/* Barra de pesquisa */}
          <div className="search-box border focus-within:bg-white/20 rounded-lg flex items-center pl-5 pr-2 relative z-20 mb-8">
            <svg
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon size-5 opacity-70 text-foreground"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
              />
            </svg>
            <input
              className="search-box__input bg-transparent px-4 py-4 outline-none grow text-foreground"
              placeholder="Pesquise..."
              autoComplete="off"
              type="text"
            />
          </div>

          {/* Destaques */}
         <Highlights hideTitle />

        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Login Dialog */}
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
};

export default Raspadinhas;
