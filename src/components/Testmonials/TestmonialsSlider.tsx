import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Review from "./Review";
import { Pagination, Autoplay } from "swiper/modules";
import { reviewsArr } from "@/utils/reviewsArr";

const TestmonialsSlider = () => {
  const [ind, setInd] = useState(0);

  return (
    <Swiper
      loop
      slidesPerView={1.5}
      direction="vertical"
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      // autoplay={{
      //   delay: 3000,
      // }}
      className=" w-full h-[80vh]  md:h-[65vh] px-0 md:px-5 py-5"
      onSlideChange={(e: any) => {
        setInd(e.realIndex);
      }}
    >
      <div className="flex flex-col justify-center">
        {reviewsArr.map((obj, i) => {
          return (
            <SwiperSlide key={i}>
              <Review isActive={ind === i} {...obj} />
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
};

export default TestmonialsSlider;
