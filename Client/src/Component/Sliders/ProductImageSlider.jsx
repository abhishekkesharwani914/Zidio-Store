import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";


function ProductImageSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className=" xl:max-w-[550px] w-full h-[600px] md:h-[716px] p-5 lg:rounded-2xl lg:border lg:border-gray-300 shadow-lg ">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          }}
          spaceBetween={10}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay,]}
          className="mySwiper2 w-full  rounded-2xl overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.image}
                alt={`Image ${index + 1}`}
                className="w-full h-[calc(600px-140px)] md:h-[calc(716px-140px)] object-cover  bg-green-500 transition-transform duration-300 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper h-20 mt-4"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full overflow-hidden rounded-xl  bg-green-700 border-2 cursor-pointer">
                <img
                  src={image.image}
                  alt={`Thumb ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProductImageSlider;
