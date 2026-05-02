import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Slide from "../components/common/Slide";

function Problems() {
  const slides = [
    {
      title: "LeetCode at Your Fingertips",
      subtitle: "Practice anywhere, anytime",
      background: "from-indigo-700 via-purple-700 to-violet-700",
      image: "https://picsum.photos/id/1015/800/600", // replace with real image
      link: "https://leetcode.com",
    },
    {
      title: "JavaScript 30 Days Challenge",
      subtitle: "Beginner Friendly",
      background: "from-orange-500 via-amber-500 to-red-500",
      image: "https://picsum.photos/id/201/800/600",
      link: "https://leetcode.com",
    },
    {
      title: "Top Interview Questions",
      subtitle: "Master FAANG interviews",
      background: "from-blue-600 via-cyan-500 to-sky-600",
      image: "https://picsum.photos/id/237/800/600",
      link: "https://leetcode.com",
    },
    {
      title: "LeetCode Premium",
      subtitle: "Unlock your potential",
      background: "from-purple-600 via-fuchsia-600 to-pink-600",
      image: "https://picsum.photos/id/180/800/600",
      link: "https://leetcode.com",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Featured on LeetCode
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-3xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              title={slide.title}
              subtitle={slide.subtitle}
              background={slide.background}
              image={slide.image}
              link={slide.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Problems;