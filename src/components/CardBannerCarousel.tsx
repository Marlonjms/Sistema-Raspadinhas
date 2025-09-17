// src/components/CardBannerCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { CardBanner } from "./CardBanner";
import { LiveIcon } from "./LiveIcon";

import celularImg from "../assets/celular.png";
import computadorImg from "../assets/computador.png";
import dinheiroImg from "../assets/dinheiro.png";
import ingressosImg from "../assets/ingressos.png";
import giftcardImg from "../assets/giftcard.png";

export const CardBannerCarousel = () => {
  return (
    <div className="flex items-center pl-2 mt-5 gap-2 md:flex">

      <div className="flex-shrink-0">
        <LiveIcon />
      </div>
      <Swiper
  modules={[Autoplay]}
  loop={true}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  breakpoints={{
    320: { slidesPerView: 2, spaceBetween: 12 },   // celular
    640: { slidesPerView: 3, spaceBetween: 16 },   // tablet
    1024: { slidesPerView: 5, spaceBetween: 70 },  // pc
  }}
>

        <SwiperSlide>
          <CardBanner
            nome="Gabriel Silva"
            premio="700 Reais"
            valor="R$ 700,00"
            img={dinheiroImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBanner
            nome="Marcelo Monteiro"
            premio="10.000 Reais"
            valor="R$ 10.000,00"
            img={dinheiroImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBanner
            nome="Jose Franklin"
            premio="5.000 Reais"
            valor="R$ 5.000,00"
            img={dinheiroImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBanner
            nome="Arlete Torres"
            premio="PlayStation 5"
            valor="R$ 4.500,00"
            img={computadorImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBanner
            nome="Fernanda Souza"
            premio="Gift Card"
            valor="R$ 200,00"
            img={giftcardImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBanner
            nome="Lucas Andrade"
            premio="Ingressos VIP"
            valor="R$ 350,00"
            img={ingressosImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardBanner
            nome="Patrícia Lima"
            premio="Celular"
            valor="R$ 1.800,00"
            img={celularImg}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
