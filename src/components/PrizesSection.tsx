
import celularImg from "../assets/celular.png";
import computadorImg from "../assets/computador.png";
import dinheiroImg from "../assets/dinheiro.png";
import ingressosImg from "../assets/ingressos.png";
import giftcardImg from "../assets/giftcard.png";

export const PrizesSection = () => {
  return (
    <section className="max-w-5xl mx-auto text-center py-16">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
        Prêmios Disponíveis
      </h2>
      <p className="text-muted-foreground mb-12 text-lg">
        Confira os incríveis prêmios que você pode ganhar
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Smartphone */}
        <div className="group p-8 rounded-xl bg-card shadow-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
          <img
            src={celularImg}
            alt="Smartphone"
            className="w-20 h-20 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="font-bold text-xl mb-2">Smartphones Premium</h3>
          <p className="text-muted-foreground">iPhone 15 Pro, Samsung Galaxy S24</p>
          <p className="text-primary font-semibold mt-2">Até R$ 8.000</p>
        </div>

        {/* Computador */}
        <div className="group p-8 rounded-xl bg-card shadow-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
          <img
            src={computadorImg}
            alt="Computador"
            className="w-20 h-20 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="font-bold text-xl mb-2">Laptops Profissionais</h3>
          <p className="text-muted-foreground">MacBook Pro, Dell XPS, HP Spectre</p>
          <p className="text-primary font-semibold mt-2">Até R$ 15.000</p>
        </div>

        {/* Dinheiro */}
        <div className="group p-8 rounded-xl bg-card shadow-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
          <img
            src={dinheiroImg}
            alt="Dinheiro"
            className="w-20 h-20 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="font-bold text-xl mb-2">Prêmios em Dinheiro</h3>
          <p className="text-muted-foreground">Dinheiro direto na sua conta</p>
          <p className="text-primary font-semibold mt-2">Até R$ 5.000</p>
        </div>

        {/* Ingressos */}
        <div className="group p-8 rounded-xl bg-card shadow-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
          <img
            src={ingressosImg}
            alt="Ingressos"
            className="w-20 h-20 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="font-bold text-xl mb-2">Shows Exclusivos</h3>
          <p className="text-muted-foreground">Ingressos para eventos premium</p>
          <p className="text-primary font-semibold mt-2">Até R$ 800</p>
        </div>

        {/* Gift Card */}
        <div className="group p-8 rounded-xl bg-card shadow-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
          <img
            src={giftcardImg}
            alt="Gift Card"
            className="w-20 h-20 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="font-bold text-xl mb-2">Vale Compras</h3>
          <p className="text-muted-foreground">Use onde quiser comprar</p>
          <p className="text-primary font-semibold mt-2">Até R$ 500</p>
        </div>

        {/* Surpresa */}
        <div className="group p-8 rounded-xl bg-card shadow-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
          <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">🎁</span>
          </div>
          <h3 className="font-bold text-xl mb-2">E muito mais!</h3>
          <p className="text-muted-foreground">Novos prêmios toda semana</p>
          <p className="text-primary font-semibold mt-2">Surpresas incríveis</p>
        </div>
      </div>
    </section>
  );
};
