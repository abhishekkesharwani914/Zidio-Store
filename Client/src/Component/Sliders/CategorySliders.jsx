import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
import { Button } from "../../index.js";
export default function CategorySlider() {
  const [categoryName, setCategoryName] = useState("");
  const categories = [
    { name: "Oversized", image: OverSized },
    { name: "Acid Wash", image: AcidWash },
    { name: "Graphic Printed", image: GraphicPrinted },
    { name: "Solid Color", image: SolidColor },
    { name: "Polo T-Shirts", image: PoloTShirt },
    { name: "Sleeveless", image: SleeveLess },
    { name: "Long Sleeve", image: LongSleeve },
    { name: "Henley", image: Henley },
    { name: "Hooded", image: Hooded },
  ];
  console.log(categoryName);

  return (
    <div className="relative mb-12">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tighter uppercase">
        Shop by Category
      </h2>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        centeredSlides={false}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 24,
          },
        }}
        navigation={{
          nextEl: ".category-swiper-next",
          prevEl: ".category-swiper-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="category-swiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[300px] sm:h-[450px] md:h-96 rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setCategoryName(category.name)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md uppercase tracking-tighter">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
