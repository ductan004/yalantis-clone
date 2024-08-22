"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const CaseStudies = () => {
  const caseList = [
    {
      title: `Enterprise-level IoT-based solution`,
      items: [
        "Designing a scalable and maintainable architecture",
        "Moving to a SaaS-based service delivery model",
        "Improving a large IoT device management ecosystem",
      ],
      smallImg: "/case-small-01.svg",
      largeImg: "/case-large-01.webp",
      bgColor: "bg-[#3164d8]",
    },
    {
      title: `Data strategy for online banking`,
      items: [
        "Building a future-proof data foundation",
        "Improving data quality for user growth and fraud reduction",
        "Ensuring compliance and building customer trust",
      ],
      smallImg: "/case-small-02.svg",
      largeImg: "/case-large-02.webp",
      bgColor: "bg-[#1c1e24]",
    },
    {
      title: `Patient management system for RestorixHealth`,
      items: [
        "Ensuring instant access to patient information",
        "Enabling automated data aggregation and management",
        "Setting up real-time order management of medical products",
        "Improving user experience to allow intuitive patient management",
      ],
      smallImg: "/case-small-03.svg",
      largeImg: "/case-large-03.webp",
      bgColor: "bg-[#1c1e24]",
    },
    {
      title: `Healthcare SaaS solution`,
      items: [
        "Ensuring HIPAA compliance and product security",
        "Digitizing and automating healthcare operations",
        "Implementing telehealth functionality",
      ],
      smallImg: "/case-small-04.svg",
      largeImg: "/case-large-04.webp",
      bgColor: "bg-[#325a77]",
    },
    {
      title: `Wealth management platform`,
      items: [
        "Building a unified system for all financial operations",
        "Optimizing legacy code, the UI/UX, and the technology stack",
        "Automating business processes to reduce the employee burden",
      ],
      smallImg: "/case-small-05.svg",
      largeImg: "/case-large-05.webp",
      bgColor: "bg-[#134d54]",
    },
    {
      title: `All-in-one real estate platform`,
      items: [
        "Building a cloud-based GDPR-compliant platform",
        "Implementing a scam protection system",
        "Conducting complex search engine optimization",
      ],
      smallImg: "/case-small-06.svg",
      largeImg: "/case-large-06.webp",
      bgColor: "bg-[#1b4b77]",
    },
    {
      title: `Load planning system`,
      items: [
        "Building a cost-efficient proof of concept",
        "Automating analytics to reduce labor costs",
        "Ensuring software interoperability and scalability",
      ],
      smallImg: "/case-small-07.svg",
      largeImg: "/case-large-07.webp",
      bgColor: "bg-[#632121]",
    },
  ];

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      slidesPerGroup={1} // Number of slides to slide at a time
      navigation={{
        nextEl: ".case-next",
        prevEl: ".case-prev",
      }}
      breakpoints={{
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="case-list mt-10 pb-20 "
    >
      {caseList.map((study, index) => (
        <SwiperSlide key={index}>
          <div className="group border border-[#494b50] py-11 px-8 relative cursor-pointer h-full">
            <div
              className={`absolute ${study.bgColor} opacity-0 inset-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-[1]`}
            ></div>
            <div className="h-full">
              <a href="#!" className="flex flex-col h-full">
                <h3 className="text-[26px] leading-tight relative z-10 min-h-28">
                  {study.title}
                </h3>
                <ul className="flex flex-col gap-3 mt-16 lg:mt-[85px] text-[#d2d2d3] text-xl leading-tight opacity-80">
                  {study.items.map((item, i) => (
                    <li key={i}>
                      <p className="service-item__text pl-8">{item}</p>
                    </li>
                  ))}
                </ul>
                <div className="case-studies__image--wrap opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 absolute top-44 z-10">
                  <Image
                    src={study.smallImg}
                    alt=""
                    width={143}
                    height={45}
                    className="case-studies__image--small"
                  />
                  <Image
                    src={study.largeImg}
                    alt=""
                    width={315}
                    height={239}
                    className="case-studies__image--large relative top-3 left-3"
                  />
                </div>
                <span className="flex gap-6 mt-auto pt-[34px] leading-6 uppercase tracking-widest text-white relative z-10">
                  See full case study
                  <Image
                    src="/white-arrow.svg"
                    alt="arrow-right"
                    width={24}
                    height={24}
                    className="filter-custom-orange transition-all duration-300 rotate-45 group-hover:-rotate-45 group-hover:filter-custom-white"
                  />
                </span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CaseStudies;
