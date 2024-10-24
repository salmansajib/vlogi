"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    leftImg: "/images/testimonial/testimonial-1.jpg",
    authorImg: "/images/testimonial/testimonial-author-1.jpg",
    authorName: "Kori Anderson",
    authorTitle: "Travel Author",
    testimonialDesc:
      "The Mondok City Hotel's immediate area provides with the utmost convenience to travel and see old Bandung Whether you want to visit the Gedung.",
    rightImg: "/images/testimonial/testimonial-2.jpg",
  },
  {
    id: 2,
    leftImg: "/images/testimonial/testimonial-1.jpg",
    authorImg: "/images/testimonial/testimonial-author-1.jpg",
    authorName: "Kori Anderson",
    authorTitle: "Travel Author",
    testimonialDesc:
      "The Mondok City Hotel's immediate area provides with the utmost convenience to travel and see old Bandung Whether you want to visit the Gedung.",
    rightImg: "/images/testimonial/testimonial-2.jpg",
  },
  {
    id: 3,
    leftImg: "/images/testimonial/testimonial-1.jpg",
    authorImg: "/images/testimonial/testimonial-author-1.jpg",
    authorName: "Kori Anderson",
    authorTitle: "Travel Author",
    testimonialDesc:
      "The Mondok City Hotel's immediate area provides with the utmost convenience to travel and see old Bandung Whether you want to visit the Gedung.",
    rightImg: "/images/testimonial/testimonial-2.jpg",
  },
];

function TravelAboutTestimonial() {
  return (
    <div className="vlo-testimonial-1">
      <div className="container">
        <div className="testimonial-title">
          <h2>What Clients Say</h2>
        </div>
        <div className="swiper testimonialOne">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            speed={1000}
            slidesPerView={1}
            className="swiper-wrapper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide className="swiper-slide" key={testimonial.id}>
                <div className="testimonial-wrapper">
                  <img
                    className="left-img"
                    src={testimonial.leftImg}
                    alt="testimonial"
                  />
                  <div className="testimonial-single">
                    <div className="testimonial-img">
                      <img
                        src={testimonial.authorImg}
                        alt={testimonial.authorName}
                      />
                    </div>
                    <div className="testimonial-info">
                      <div className="author-name">
                        <h3>{testimonial.authorName}</h3>
                        <p>{testimonial.authorTitle}</p>
                      </div>
                      <p className="testimonial-desc">
                        {testimonial.testimonialDesc}
                      </p>
                    </div>
                  </div>
                  <img
                    className="right-img"
                    src={testimonial.rightImg}
                    alt="testimonial"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev">
            <img src="/images/icon/arrow-left.svg" alt="Arrow Left" />
          </div>
          <div className="swiper-button-next">
            <img src="/images/icon/arrow-right.svg" alt="Arrow Right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelAboutTestimonial;
