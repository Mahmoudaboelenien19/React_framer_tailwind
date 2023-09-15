import { CarType } from "../../types";
import { cars } from "../../utils/arr";
import Car from "./Car";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import "swiper/css/autoplay";
const CarsSlide = () => {
  return (
    <Swiper
      loop
      className="w-full mt-12 "
      spaceBetween={15}
      direction="horizontal"
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        1: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {cars.map((car: CarType) => {
        return (
          <SwiperSlide key={car.name}>
            <Car {...car} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarsSlide;
