"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const partnersData = [
  {
    id: 1,
    href: "/",
    src: "/images/about/travel-tag-1.png",
    alt: "Paradise Travel",
  },
  {
    id: 2,
    href: "/",
    src: "/images/about/travel-tag-2.png",
    alt: "Sky Travel",
  },
  {
    id: 3,
    href: "/",
    src: "/images/about/travel-tag-3.png",
    alt: "Avata Travel",
  },
  {
    id: 4,
    href: "/",
    src: "/images/about/travel-tag-4.png",
    alt: "Avata Travel",
  },
  {
    id: 5,
    href: "/",
    src: "/images/about/travel-tag-5.png",
    alt: "Avata Travel",
  },
  {
    id: 6,
    href: "/",
    src: "/images/about/travel-tag-1.png",
    alt: "Paradise Travel",
  },
  {
    id: 7,
    href: "/",
    src: "/images/about/travel-tag-2.png",
    alt: "Sky Travel",
  },
  {
    id: 8,
    href: "/",
    src: "/images/about/travel-tag-3.png",
    alt: "Avata Travel",
  },
  {
    id: 9,
    href: "/",
    src: "/images/about/travel-tag-4.png",
    alt: "Avata Travel",
  },
  {
    id: 10,
    href: "/",
    src: "/images/about/travel-tag-5.png",
    alt: "Avata Travel",
  },
  {
    id: 11,
    href: "/",
    src: "/images/about/travel-tag-1.png",
    alt: "Paradise Travel",
  },
  {
    id: 12,
    href: "/",
    src: "/images/about/travel-tag-2.png",
    alt: "Sky Travel",
  },
  {
    id: 13,
    href: "/",
    src: "/images/about/travel-tag-3.png",
    alt: "Avata Travel",
  },
  {
    id: 14,
    href: "/",
    src: "/images/about/travel-tag-4.png",
    alt: "Avata Travel",
  },
  {
    id: 15,
    href: "/",
    src: "/images/about/travel-tag-5.png",
    alt: "Avata Travel",
  },
];

function TravelAboutPartner() {
  return (
    <div className="vlo-partner-1">
      <div className="container">
        <div className="swiper patnerSlider1">
          <Swiper
            modules={[Autoplay]} // Include the Autoplay module
            autoplay={{
              delay: 2000, // Delay between transitions (in ms)
              disableOnInteraction: false, // Continue autoplay after interaction
            }}
            speed={1000}
            loop={true}
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
            className="swiper-wrapper"
          >
            {partnersData.map((partner) => (
              <SwiperSlide className="swiper-slide mx-auto" key={partner.id}>
                <div className="partner-inner">
                  <a href={partner.href}>
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className=" mx-auto"
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TravelAboutPartner;
