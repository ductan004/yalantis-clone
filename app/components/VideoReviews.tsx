"use client"; // Ensure this component runs on the client-side

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import React, { useState } from "react";

const VideoReviews = () => {
  const reviews = [
    {
      name: "Simon Jones",
      role: "CIO in Healthcare",
      image: "/preview-02.webp",
      description: `Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.`,
    },
    {
      name: "Simon Jones",
      role: "CIO in Healthcare",
      image: "/preview-03.webp",
      description: `Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.`,
    },
    {
      name: "Simon Jones",
      role: "CIO in Healthcare",
      image: "/preview-01.webp",
      description: `Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.`,
    },
    {
      name: "Simon Jones",
      role: "CIO in Healthcare",
      image: "/preview-03.webp",
      description: `Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.`,
    },
    {
      name: "Simon Jones",
      role: "CIO in Healthcare",
      image: "/preview-02.webp",
      description: `Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.`,
    },
    {
      name: "Simon Jones",
      role: "CIO in Healthcare",
      image: "/preview-03.webp",
      description: `Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an effective development team in no time and perform as expected.`,
    },
    // Repeat for other reviews...
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  return (
    <div className="md:gap-8 xl:gap-14 relative pr-0 lg:pr-28 xl:pr-36">
      {/* <div className="swiper-pagination mt-4 lg:hidden"></div> */}
      <p>
        {currentSlide + 1} / {totalSlides}
      </p>
      <div className="flex items-center justify-center mt-[11px] w-full lg:hidden">
        <div className="swiper-pagination-customize flex items-center justify-center w-full"></div>
      </div>

      <Swiper
        onInit={(swiper) => {
          setTotalSlides(swiper.slides.length); // Get total slides
          setCurrentSlide(swiper.realIndex); // Get current slide index
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex); // Update current slide index on change
        }}
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Number of slides visible in the viewport
        slidesPerGroup={1} // Number of slides to slide at a time
        loop={true}
        navigation={{
          nextEl: ".video-button-next",
          prevEl: ".video-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-customize",
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        modules={[Navigation, Pagination]}
        className="review-list mt-[30px] md:mr-8"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-item select-none">
              <a href="#!" className="group review-item__img--wrap relative">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={336}
                  height={336}
                  className="w-full"
                />
                <div className="review-item__info--play flex gap-4 absolute left-5 bottom-4">
                  <div className="flex justify-center items-center w-12 h-12 rounded-[50%] bg-white">
                    <Image
                      src="/play.svg"
                      alt="Play"
                      className="group-hover:filter-custom-orange"
                      width={14}
                      height={9}
                    />
                  </div>
                  <div>
                    <h4 className="review-item__title text-xl font-medium leading-7">
                      {review.name}
                    </h4>
                    <p className="review-item__desc--person mt-1 text-[#d8d8d8] font-medium tracking-wider">
                      {review.role}
                    </p>
                  </div>
                </div>
              </a>
              <div className="review-item__text mt-5 px-4 opacity-80">
                <p className="review-item__desc leading-6">
                  {review.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <div className="review-controls hidden lg:block">
          <div className="flex flex-col gap-6 select-none">
            <div className="video-button-prev flex group justify-center opacity-40 items-center w-16 h-16 rounded-[50%] border-2 bg-transparent cursor-pointer hover:border-primary-color hover:opacity-100">
              <Image
                src="/video-arrow.svg"
                alt=""
                className="group-hover:filter-custom-orange"
                width={13}
                height={7}
              />
            </div>
            <div className="video-button-next flex group justify-center opacity-40 items-center w-16 h-16 rounded-[50%] border-2 bg-transparent cursor-pointer hover:border-primary-color hover:opacity-100">
              <Image
                src="/video-arrow.svg"
                alt=""
                className="group-hover:filter-custom-orange rotate-180"
                width={13}
                height={7}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoReviews;
