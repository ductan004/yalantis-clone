import { useState } from "react";
import Image from "next/image";

const menuItems = [
  {
    title: "SERVICES",
    submenu: [
      { text: "Custom software development", link: "#!" },
      { text: "Web development", link: "#!" },
      { text: "Mobile development", link: "#!" },
      { text: "UI/UX Design", link: "#!" },
      { text: "DevOps", link: "#!" },
    ],
  },
  {
    title: "EXPERTISE",
    submenu: [
      { text: "Internet of Things (IoT)", link: "#!" },
      { text: "Web development", link: "#!" },
      { text: "Mobile development", link: "#!" },
      { text: "UI/UX Design", link: "#!" },
      { text: "DevOps", link: "#!" },
    ],
  },
  {
    title: "INDUSTRIES",
    submenu: [
      { text: "Internet of Things (IoT)", link: "#!" },
      { text: "Web development", link: "#!" },
      { text: "Mobile development", link: "#!" },
      { text: "UI/UX Design", link: "#!" },
      { text: "DevOps", link: "#!" },
    ],
  },
  {
    title: "SUCCESS STORIES",
    submenu: [
      { text: "Internet of Things (IoT)", link: "#!" },
      { text: "Web development", link: "#!" },
      { text: "Mobile development", link: "#!" },
      { text: "UI/UX Design", link: "#!" },
      { text: "DevOps", link: "#!" },
    ],
  },
  {
    title: "SOLUTION HUB",
    submenu: [
      { text: "Internet of Things (IoT)", link: "#!" },
      { text: "Web development", link: "#!" },
      { text: "Mobile development", link: "#!" },
      { text: "UI/UX Design", link: "#!" },
      { text: "DevOps", link: "#!" },
    ],
  },
  {
    title: "COMPANY",
    submenu: [
      { text: "Internet of Things (IoT)", link: "#!" },
      { text: "Web development", link: "#!" },
      { text: "Mobile development", link: "#!" },
      { text: "UI/UX Design", link: "#!" },
      { text: "DevOps", link: "#!" },
    ],
  },
  {
    title: "INSIGHTS",
    submenu: [
      { text: "Internet of Things (IoT)", link: "#!" },
      { text: "Web development", link: "#!" },
      { text: "Mobile development", link: "#!" },
      { text: "UI/UX Design", link: "#!" },
      { text: "DevOps", link: "#!" },
    ],
  },
];

const MenuList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className="menuList">
      {menuItems.map((item, index) => (
        <li key={index}>
          <div
            className="flex justify-between items-center py-5 tracking-wide leading-9 text-2xl uppercase cursor-pointer"
            onClick={() => toggleSubmenu(index)}
          >
            <a href="#!">{item.title}</a>
            <Image
              src="/arrow.svg"
              alt=""
              width={20}
              height={0}
              className={`${
                openIndex === index ? "rotate-180" : ""
              } transition-all duration-300`}
            />
          </div>
          <div className="separate_navbar w-full h-[1px] bg-[#d2d2d3]"></div>

          {item.submenu && (
            <div
              className={`submenu transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="grid grid-cols-2 gap-y-3 pt-[16px] py-[24px]">
                {item.submenu.map((submenuItem, submenuIndex) => (
                  <li key={submenuIndex}>
                    <a href={submenuItem.link}>{submenuItem.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
