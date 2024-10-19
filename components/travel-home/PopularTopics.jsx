"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// slides data
const slidesData = [
  {
    id: 1,
    imgSrc: "/images/post-category/post-category-1.jpg",
    imgAlt: "Professional Life Style",
    title: "Professional Life Style",
    link: "travel-blog-details.html",
    articlesCount: "06 articles",
  },
  {
    id: 2,
    imgSrc: "/images/post-category/post-category-2.jpg",
    imgAlt: "Tour & Travels Guide",
    title: "Tour & Travels Guide",
    link: "travel-blog-details.html",
    articlesCount: "04 articles",
  },
  {
    id: 3,
    imgSrc: "/images/post-category/post-category-3.jpg",
    imgAlt: "Couple Tour & Travel",
    title: "Couple Tour & Travel",
    link: "travel-blog-details.html",
    articlesCount: "05 articles",
  },
  {
    id: 4,
    imgSrc: "/images/post-category/post-category-4.jpg",
    imgAlt: "Play Beach Volleyball",
    title: "Play Beach Volleyball",
    link: "travel-blog-details.html",
    articlesCount: "02 articles",
  },
  {
    id: 5,
    imgSrc: "/images/post-category/post-category-1.jpg",
    imgAlt: "Professional Life Style",
    title: "Professional Life Style",
    link: "travel-blog-details.html",
    articlesCount: "06 articles",
  },
  {
    id: 6,
    imgSrc: "/images/post-category/post-category-2.jpg",
    imgAlt: "Tour & Travels Guide",
    title: "Tour & Travels Guide",
    link: "travel-blog-details.html",
    articlesCount: "04 articles",
  },
  {
    id: 7,
    imgSrc: "/images/post-category/post-category-3.jpg",
    imgAlt: "Couple Tour & Travel",
    title: "Couple Tour & Travel",
    link: "travel-blog-details.html",
    articlesCount: "05 articles",
  },
  {
    id: 8,
    imgSrc: "/images/post-category/post-category-4.jpg",
    imgAlt: "Play Beach Volleyball",
    title: "Play Beach Volleyball",
    link: "travel-blog-details.html",
    articlesCount: "02 articles",
  },
  {
    id: 9,
    imgSrc: "/images/post-category/post-category-1.jpg",
    imgAlt: "Professional Life Style",
    title: "Professional Life Style",
    link: "travel-blog-details.html",
    articlesCount: "06 articles",
  },
  {
    id: 10,
    imgSrc: "/images/post-category/post-category-2.jpg",
    imgAlt: "Tour & Travels Guide",
    title: "Tour & Travels Guide",
    link: "travel-blog-details.html",
    articlesCount: "04 articles",
  },
  {
    id: 11,
    imgSrc: "/images/post-category/post-category-3.jpg",
    imgAlt: "Couple Tour & Travel",
    title: "Couple Tour & Travel",
    link: "travel-blog-details.html",
    articlesCount: "05 articles",
  },
  {
    id: 12,
    imgSrc: "/images/post-category/post-category-4.jpg",
    imgAlt: "Play Beach Volleyball",
    title: "Play Beach Volleyball",
    link: "travel-blog-details.html",
    articlesCount: "02 articles",
  },
];

function PopularTopics() {
  const ptSwiperRef = useRef(null); // Ref for Swiper instance

  return (
    <div className="vlo-categories-1">
      <div className="container">
        <div className="vlo-heading-1">
          <h2>Popular topics</h2>
          <p>Animation as a third dimension by which to simplify</p>
        </div>
        <div className="swiper categorieOne">
          <Swiper
            className="swiper-wrapper"
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            speed={700}
            navigation={{
              nextEl: ".pt-swiper-button-next",
              prevEl: ".pt-swiper-button-prev",
            }}
            spaceBetween={20}
            breakpoints={{
              // When the window width is >= 1024px, show 5 slides
              1024: {
                slidesPerView: 5,
              },
              // When the window width is >= 768px, show 3 slides
              768: {
                slidesPerView: 3,
              },
              // When the window width is >= 480px, show 2 slides
              480: {
                slidesPerView: 2,
              },
              // When the window width is < 480px, show 1 slide
              0: {
                slidesPerView: 1,
              },
            }}
            onSwiper={(swiper) => (ptSwiperRef.current = swiper)}
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="vlo-categories-single"
                  onMouseEnter={() => ptSwiperRef.current.autoplay.stop()}
                  onMouseLeave={() => ptSwiperRef.current.autoplay.start()}
                >
                  <div className="vlo-categories-img">
                    <img src={slide.imgSrc} alt={slide.imgAlt} />
                  </div>
                  <h4 className="vlo-categories-title">
                    <a href={slide.link}>{slide.title}</a>
                  </h4>
                  <div className="categories-count">{slide.articlesCount}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="categories-navigation space-x-3 z-20">
            <button
              className="pt-swiper-button-prev bg-gray-900 hover:bg-blue-400 text-gray-50 text-2xl p-2 rounded-full transition-colors duration-150"
              onMouseEnter={() => ptSwiperRef.current.autoplay.stop()}
              onMouseLeave={() => ptSwiperRef.current.autoplay.start()}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="pt-swiper-button-next bg-gray-900 hover:bg-blue-400 text-gray-50 text-2xl p-2 rounded-full transition-colors duration-150"
              onMouseEnter={() => ptSwiperRef.current.autoplay.stop()}
              onMouseLeave={() => ptSwiperRef.current.autoplay.start()}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularTopics;
