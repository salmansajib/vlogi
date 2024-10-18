"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const bannerSlidesData = [
  {
    id: 1,
    heading: "Stop Wasting Time And Start",
    highlight: "Beach Traveling",
    description:
      "Architecto porro elit, integer volutpat voluptas? Iure autem magnis dui faucibus hendrerit consequatur alias Curae consequuntur turpis libero sequi.",
    readMoreLink: "travel-blog-details.html",
    author: "Anderson",
    postDate: "Jan 12, 2026",
    imgSrc: "/images/banner/banner-1.jpg",
    imgAlt: "Banner",
  },
  {
    id: 2,
    heading: "Stop Wasting Time And Start",
    highlight: "Beach Traveling",
    description:
      "Architecto porro elit, integer volutpat voluptas? Iure autem magnis dui faucibus hendrerit consequatur alias Curae consequuntur turpis libero sequi.",
    readMoreLink: "travel-blog-details.html",
    author: "Anderson",
    postDate: "Jan 12, 2026",
    imgSrc: "/images/banner/banner-1.jpg",
    imgAlt: "Banner",
  },
  {
    id: 3,
    heading: "Stop Wasting Time And Start",
    highlight: "Beach Traveling",
    description:
      "Architecto porro elit, integer volutpat voluptas? Iure autem magnis dui faucibus hendrerit consequatur alias Curae consequuntur turpis libero sequi.",
    readMoreLink: "travel-blog-details.html",
    author: "Anderson",
    postDate: "Jan 12, 2026",
    imgSrc: "/images/banner/banner-1.jpg",
    imgAlt: "Banner",
  },
  {
    id: 4,
    heading: "Stop Wasting Time And Start",
    highlight: "Beach Traveling",
    description:
      "Architecto porro elit, integer volutpat voluptas? Iure autem magnis dui faucibus hendrerit consequatur alias Curae consequuntur turpis libero sequi.",
    readMoreLink: "travel-blog-details.html",
    author: "Anderson",
    postDate: "Jan 12, 2026",
    imgSrc: "/images/banner/banner-1.jpg",
    imgAlt: "Banner",
  },
  {
    id: 5,
    heading: "Stop Wasting Time And Start",
    highlight: "Beach Traveling",
    description:
      "Architecto porro elit, integer volutpat voluptas? Iure autem magnis dui faucibus hendrerit consequatur alias Curae consequuntur turpis libero sequi.",
    readMoreLink: "travel-blog-details.html",
    author: "Anderson",
    postDate: "Jan 12, 2026",
    imgSrc: "/images/banner/banner-1.jpg",
    imgAlt: "Banner",
  },
];

function Banner() {
  return (
    <div className="vlo-banner-1">
      <div className="vlo-banner-water-mark">
        <h2>TRAVEL</h2>
      </div>
      <div className="vlo-banner-shapes">
        <img src="/images/shape/ellipse-13.svg" alt="ellipse-13" />
        <img src="/images/shape/ellipse-16.svg" alt="ellipse-16" />
        <img src="/images/shape/ellipse-17.svg" alt="ellipse-17" />
        <img src="/images/shape/rectangle-141.svg" alt="rectangle-141" />
        <img src="/images/shape/rectangle-142.svg" alt="rectangle-142" />
        <img src="/images/shape/vector-2.svg" alt="vector-2" />
      </div>
      <div className="container">
        <div className="swiper bannerSlide">
          <Swiper
            className="swiper-wrapper"
            modules={[Navigation, Pagination]}
            speed={700}
            navigation={{
              nextEl: ".banner-swiper-button-next",
              prevEl: ".banner-swiper-button-prev",
            }}
            pagination={{
              el: ".banner-swiper-pagination",
              type: "bullets",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}">${index + 1}</span>`;
              },
            }}
            slidesPerView={1}
          >
            {bannerSlidesData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <div className="bannder-heading">
                        <h1>
                          {slide.heading} <span>{slide.highlight}</span>
                        </h1>
                      </div>
                      <div className="banner-desc">
                        <p>{slide.description}</p>
                      </div>
                      <div className="post-btn-wrapper">
                        <div className="post-read-more-btn">
                          <a href={slide.readMoreLink}>Read More</a>
                        </div>
                        <div className="post-author">
                          <span>posted by</span>
                          <a href={slide.readMoreLink}>{slide.author}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="banner-img">
                      <div className="post-date">{slide.postDate}</div>
                      <img src={slide.imgSrc} alt={slide.imgAlt} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="vlo-navigation-wrapper">
            <button className="banner-swiper-button-prev swiper-button-prev"></button>
            <div className="banner-swiper-pagination swiper-pagination"></div>
            <button className="banner-swiper-button-next swiper-button-next"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
