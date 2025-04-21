import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import {
  AcidWash,
  GraphicPrinted,
  Henley,
  Hooded,
  LongSleeve,
  OverSized,
  PoloTShirt,
  SleeveLess,
  SolidColor,
} from "../../assets/index.js";

export default function CategorySlider() {
  const category = [
    {
      name: "Oversized",
      image:  OverSized ,
    },
    {
      name: "Acid Wash ",
      image:  AcidWash ,
    },
    {
      name: "Graphic Printed ",
      image:  GraphicPrinted ,
    },
    {
      name: "Solid Color",
      image:  SolidColor ,
    },
    {
      name: " Polo T-Shirts ",
      image:  PoloTShirt ,
    },
    {
      name: "Sleeveless",
      image:  SleeveLess ,
    },
    {
      name: " Long Sleeve ",
      image:  LongSleeve ,
    },
    {
      name: "Henley",
      image:  Henley ,
    },
    {
      name: "Hooded ",
      image:  Hooded ,
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        className="mySwiper h-[calc(100vh-134px)]"
      >
        {category.map((category, index) => (
          <SwiperSlide className="h-full w-[571px]" key={index}>
            <div className="h-full w-full relative overflow-hidden cursor-pointer group">
              <img
                src={category.image}
                alt={category.name}
                className="h-full  object-cover w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="absolute bottom-10 left-5 text-white font-semibold text-2xl group-hover:scale-105 group-hover:translate-y-[-5px] transition-all duration-300">
                {category.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
