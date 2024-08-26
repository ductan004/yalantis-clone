"use client"; // Ensure this component runs on the client-side

import Image from "next/image";
import Button from "./Button";
import Socials from "./Socials";
import { useState } from "react";
import MenuList from "./MenuList";
const menuListData = [
  {
    title: "Services",
    items: [
      "Custom software development",
      "Dedicated development teams",
      "IT consulting",
      "Digital transformation",
    ],
  },
  {
    title: "Expertises",
    items: [
      {
        name: "Technology",
        subItems: [
          "Custom software development",
          "Dedicated development teams",
        ],
      },
      {
        name: "Solutions",
        subItems: [
          "Custom software development",
          "Dedicated development teams",
        ],
      },
    ],
  },
  {
    title: "Yalantis solution hub",
    items: [
      "Yalantis IoT Accelerator",
      "Yalantis ERP system",
      "Yalantis Payments",
    ],
  },
  {
    title: "Y-Quality",
    items: [],
  },
];
const Footer = () => {
  return (
    <footer className="bg-primary-bg text-white py-[80px] md:pt-[104px] md:pb-[143px]">
      <div className="container mx-auto px-4 xl:px-8 lg:px-4">
        <div className="footer-menu grid xl:grid-cols-3">
          <div className="footer-menu-list xl:grid grid-cols-3 xl:col-span-2 gap-[35px] hidden">
            <div className="footer-menu-item flex flex-col gap-5">
              <h4 className="text-xl">Services</h4>
              <ul className="flex flex-col gap-4">
                <li className="text-sm">
                  <a href="">Custom software development</a>
                </li>
                <li className="text-sm">
                  <a href="">Dedicated development teams</a>
                </li>
                <li className="text-sm">
                  <a href="">IT consulting</a>
                </li>
                <li className="text-sm">
                  <a href="">Digital transformation</a>
                </li>
                <li className="text-sm">
                  <a href="">Digital transformation</a>
                </li>
              </ul>
              <h4 className="text-xl mt-7">Services</h4>
              <ul className="flex flex-col gap-4">
                <li className="text-sm">
                  <a href="">Custom software development</a>
                </li>
                <li className="text-sm">
                  <a href="">Dedicated development teams</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu-item flex flex-col gap-5">
              <h4 className="text-xl">Expertises</h4>
              <ul className="flex flex-col gap-4">
                <li className="text-sm">
                  <div className="flex justify-between items-center">
                    <a href="#!">Technology</a>
                    <Image
                      src="/arrow.svg"
                      alt=""
                      width={0}
                      height={0}
                      className="filter-custom-white w-3"
                    />
                  </div>
                  <ul className="flex-col gap-4 mt-4 hidden">
                    <li className="text-sm text-[#d2d2d3]">
                      <a href="">Custom software development</a>
                    </li>
                    <li className="text-sm text-[#d2d2d3]">
                      <a href="">Dedicated development teams</a>
                    </li>
                  </ul>
                </li>
                <li className="text-sm">
                  <div className="flex justify-between items-center">
                    <a href="#!">Solutions</a>
                    <Image
                      src="/arrow.svg"
                      alt=""
                      width={0}
                      height={0}
                      className="filter-custom-white w-3"
                    />
                  </div>
                  <ul className=" flex-col gap-4 mt-4 hidden">
                    <li className="text-sm text-[#d2d2d3]">
                      <a href="">Custom software development</a>
                    </li>
                    <li className="text-sm text-[#d2d2d3]">
                      <a href="">Dedicated development teams</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-xl mt-7">Yalantis solution hub</h4>
              <ul className="flex flex-col gap-4">
                <li className="text-sm">
                  <a href="">Yalantis IoT Accelerator</a>
                </li>
                <li className="text-sm">
                  <a href="">Yalantis ERP system</a>
                </li>
                <li className="text-sm">
                  <a href="">Yalantis Payments</a>
                </li>
              </ul>
              <h4 className="text-xl mt-7">Y-Quality</h4>
            </div>
            <div className="footer-menu-item flex flex-col gap-5">
              <h4 className="text-xl">Services</h4>
              <ul className="flex flex-col gap-4">
                <li className="text-sm">
                  <a href="">Custom software development</a>
                </li>
                <li className="text-sm">
                  <a href="">Dedicated development teams</a>
                </li>
                <li className="text-sm">
                  <a href="">IT consulting</a>
                </li>
                <li className="text-sm">
                  <a href="">Digital transformation</a>
                </li>
                <li className="text-sm">
                  <a href="">Digital transformation</a>
                </li>
              </ul>
              <h4 className="text-xl mt-7">Services</h4>
              <ul className="flex flex-col gap-4">
                <li className="text-sm">
                  <a href="">Custom software development</a>
                </li>
                <li className="text-sm">
                  <a href="">Dedicated development teams</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:hidden block">
            <MenuList className="" icon="filter-custom-white"></MenuList>
          </div>

          <div className="footer-info col-span-1 md:pl-[70px] mt-[80px] xl:mt-0">
            <div className="flex flex-col md:flex-row xl:flex-col justify-between">
              <div className="flex flex-col">
                <Button
                  text="CONTACT US"
                  href="#!"
                  className="md:max-w-[212px] max-w-full"
                ></Button>
                <Socials className="mt-[38px] justify-center md:justify-normal"></Socials>
                <div className="flex mt-8 md:mt-[72px] justify-center md:justify-normal">
                  <Image
                    src={`/logo-footer.svg`}
                    alt=""
                    className=""
                    width={215}
                    height={55}
                  ></Image>
                </div>
              </div>
              <div className="mt-[30px] xl:mt-[65px] flex flex-col items-center text-center md:items-end md:text-right xl:text-left xl:items-start">
                <a href="#!" className="header-logo__link">
                  <Image
                    src="/logo_white.svg"
                    alt="Yalantis logo"
                    className="header-logo__img w-[112px] h-[25px]"
                    width={0}
                    height={0}
                  />
                </a>
                <p className="mt-[23px] text-xs text-[#9e9fa4] max-w-64 xl:max-w-full">
                  ©Copyright 2024 Yalantis – Software engineering and IT
                  consulting company. All rights reserved
                </p>
                <ul className="mt-5 flex flex-col gap-[10px] text-[#9e9fa4]">
                  <li className="text-sm">
                    <a href="#!" className="text-xs underline">
                      Cookies notice
                    </a>
                  </li>
                  <li className="text-sm">
                    <a href="#!" className="text-xs underline">
                      Privacy notice
                    </a>
                  </li>
                  <li className="text-sm">
                    <a href="#!" className="text-xs underline">
                      Quality policy
                    </a>
                  </li>
                  <li className="text-sm">
                    <a href="#!" className="text-xs underline">
                      Yalantis Sustainability Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
