"use client"; // Ensure this component runs on the client-side

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import Nav from "./Nav";
import MenuList from "./MenuList";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-bg">
      <div className="container mx-auto px-4 xl:px-8 lg:px-4">
        <div className="flex h-[72px] xl:h-[88px] items-center">
          {/* Logo */}
          <div className="header-logo mr-auto">
            <a href="#!" className="header-logo__link">
              <Image
                src="/logo_white.svg"
                alt="Yalantis logo"
                className="header-logo__img w-[86px] h-[20px]"
                width={0}
                height={0}
              />
            </a>
          </div>
          {/* Menu */}
          <Nav />
          {/* Action */}
          <Button href="#!" text="CONTACT US" className="hidden md:block" />

          {/* Navbar Mobile */}
          <button
            className="w-12 h-12 flex xl:hidden justify-center items-center ml-8"
            onClick={toggleMenu}
          >
            <Image src="/navbar.svg" alt="navbar" width={32} height={32} />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Navbar */}
      <div
        className={`absolute left-0 right-0 top-0 h-screen bg-white transform transition-transform duration-300 xl:hidden ${
          isMenuOpen ? "-translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 xl:px-8 lg:px-4">
          <div className="flex h-[72px] xl:h-[88px] items-center">
            {/* Logo */}
            <div className="header-logo mr-auto">
              <a href="#!" className="header-logo__link">
                <Image
                  src="/logo_dark.svg"
                  alt="Yalantis logo"
                  className="header-logo__img w-[116px] h-[26px]"
                  width={0}
                  height={0}
                />
              </a>
            </div>
            {/* Close Navbar Mobile */}
            <a
              href="#!"
              className="w-12 h-12 flex xl:hidden justify-center items-center ml-8"
              onClick={toggleMenu}
            >
              <Image
                src="/close.svg"
                alt="close"
                className="w-8 h-8"
                width={0}
                height={0}
              />
            </a>
          </div>
          <div className="menu-wrap pt-[38px] flex flex-col justify-between">
            {/* <ul className="menuList">
              <li>
                <div className="flex justify-between items-center py-5 tracking-wide leading-9 text-2xl uppercase">
                  <a href="#!">SERVICES</a>
                  <Image src="/arrow.svg" alt="" width={20} height={0} />
                </div>
                <div className="separate_navbar w-full h-[1px] bg-[#d2d2d3]"></div>

                <div className="submenu block">
                  <ul className="grid grid-cols-2 gap-y-3 mt-[16px] mb-[24px]">
                    <li>
                      <a href="">Custom software development</a>
                    </li>
                    <li>
                      <a href="">Custom software development</a>
                    </li>
                    <li>
                      <a href="">Custom software development</a>
                    </li>
                    <li>
                      <a href="">Custom software development</a>
                    </li>
                    <li>
                      <a href="">Custom software development</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center py-5 tracking-wide leading-9 text-2xl uppercase">
                  <a href="#!">SERVICES</a>
                  <Image src="/arrow.svg" alt="" width={20} height={0} />
                </div>
                <div className="separate_navbar w-full h-[1px] bg-[#d2d2d3]"></div>

                <div className="submenu block">
                  <ul className="grid grid-cols-2 gap-y-3 mt-[16px] mb-[24px]">
                    <li>
                      <a href="">Custom software development</a>
                    </li>
                    <li>
                      <a href="">Custom software development</a>
                    </li>
                    <li>
                      <a href="">Custom software development</a>
                    </li>
                    <li>
                      <a href="">Custom software development</a>
                    </li>
                    <li>
                      <a href="">Custom software development</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul> */}
            <MenuList></MenuList>
            <div className="flex justify-between items-center flex-col gap-[60px] md:flex-row">
              <div className="socials flex gap-8 order-1 md:-order-none">
                <a href="#!">
                  <Image
                    className="w-8 h-8"
                    src="/linkedin.svg"
                    alt="navbar"
                    width={0}
                    height={0}
                  />
                </a>
                <a href="#!">
                  <Image
                    className="w-8 h-8"
                    src="/github.svg"
                    alt="navbar"
                    width={0}
                    height={0}
                  />
                </a>
                <a href="#!">
                  <Image
                    className="w-8 h-8"
                    src="/dou.svg"
                    alt="navbar"
                    width={0}
                    height={0}
                  />
                </a>
                <a href="#!">
                  <Image
                    className="w-8 h-8"
                    src="/inst.svg"
                    alt="navbar"
                    width={0}
                    height={0}
                  />
                </a>
                <a href="#!">
                  <Image
                    className="w-8 h-8"
                    src="/youtube.svg"
                    alt="navbar"
                    width={0}
                    height={0}
                  />
                </a>
              </div>
              <Button
                href="#!"
                text="Contact us"
                className="bg-primary-color text-white min-w-full md:min-w-[240px]"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
