import Image from "next/image";

const menuItems = [
  {
    title: "SERVICES",
    subMenu: [
      {
        title: "Custom software development",
        description:
          "Tailored software solutions and software augmentation services to meet unique business needs, drive operational efficiency, and stimulate business expansion",
      },
      {
        title: "Dedicated development teams",
        description:
          "Dedicated development teams and professionals that work exclusively on your project and ensure top-notch tailored solutions",
      },
      {
        title: "IT consulting",
        description:
          "Expert guidance on leveraging advanced technologies to optimize business processes, drive innovation, and achieve strategic objectives",
      },
      {
        title: "Digital transformation",
        description:
          "Digital transformation services for streamlined business processes, improved customer experiences, and enhanced operational efficiency",
      },
    ],
  },
  {
    title: "EXPERTISE",
    subMenu: [
      {
        title: null,
        paragraphs: [
          "Expert guidance on leveraging advanced",
          "Expert guidance on leveraging advanced",
          "Expert guidance on leveraging advanced",
        ],
      },
      {
        title: "Custom software development",
        description:
          "Tailored software solutions and software augmentation services to meet unique business needs, drive operational efficiency, and stimulate business expansion",
      },
      {
        title: "Dedicated development teams",
        description:
          "Dedicated development teams and professionals that work exclusively on your project and ensure top-notch tailored solutions",
      },
      {
        title: "IT consulting",
        description:
          "Expert guidance on leveraging advanced technologies to optimize business processes, drive innovation, and achieve strategic objectives",
      },
      {
        title: null,
        paragraphs: [
          "Digital transformation",
          "Digital transformation",
          "Digital transformation",
        ],
      },
    ],
  },
  {
    title: "INDUSTRIES",
    subMenu: [
      {
        title: "IT consulting",
        description:
          "Expert guidance on leveraging advanced technologies to optimize business processes, drive innovation, and achieve strategic objectives",
      },
      {
        title: "Custom software development",
        description:
          "Tailored software solutions and software augmentation services to meet unique business needs, drive operational efficiency, and stimulate business expansion",
      },
      {
        title: "Dedicated development teams",
        description:
          "Dedicated development teams and professionals that work exclusively on your project and ensure top-notch tailored solutions",
      },
      {
        title: null,
        paragraphs: [
          "Expert guidance on leveraging advanced",
          "Expert guidance on leveraging advanced",
          "Expert guidance on leveraging advanced",
        ],
      },
      {
        title: null,
        paragraphs: [
          "Digital transformation",
          "Digital transformation",
          "Digital transformation",
        ],
      },
    ],
  },
  {
    title: "SUCCESS STORIES",
    subMenu: [
      {
        title: "Digital transformation",
        description:
          "Digital transformation services for streamlined business processes, improved customer experiences,and enhanced operational efficiency",
      },
      {
        title: "IT consulting",
        description:
          " Expert guidance on leveraging advanced technologies to optimize business processes, drive innovation, and achieve strategic objectives",
      },
    ],
  },
  {
    title: "SOLUTION HUB",
    subMenu: [
      {
        title: "Digital transformation",
        description:
          "Digital transformation services for streamlined business processes, improved customer experiences,and enhanced operational efficiency",
      },
      {
        title: "IT consulting",
        description:
          " Expert guidance on leveraging advanced technologies to optimize business processes, drive innovation, and achieve strategic objectives",
      },
      {
        title: "IT consulting",
        description:
          " Expert guidance on leveraging advanced technologies to optimize business processes, drive innovation, and achieve strategic objectives",
      },
    ],
  },
  {
    title: "COMPANY",
    subMenu: [
      {
        title: "Digital transformation",
        description:
          "Digital transformation services for streamlined business processes, improved customer experiences,and enhanced operational efficiency",
      },
      {
        title: "IT consulting",
        description:
          " Expert guidance on leveraging advanced technologies to optimize business processes, drive innovation, and achieve strategic objectives",
      },
      {
        title: "IT consulting",
        description:
          " Expert guidance on leveraging advanced technologies to optimize business processes, drive innovation, and achieve strategic objectives",
      },
    ],
  },
  {
    title: "INSIGHTS",
    subMenu: [
      {
        title: "Digital transformation",
        description:
          "Digital transformation services for streamlined business processes, improved customer experiences,and enhanced operational efficiency",
      },
      {
        title: "IT consulting",
        description:
          " Expert guidance on leveraging advanced technologies to optimize business processes, drive innovation, and achieve strategic objectives",
      },
      {
        title: "IT consulting",
        description:
          " Expert guidance on leveraging advanced technologies to optimize business processes, drive innovation, and achieve strategic objectives",
      },
    ],
  },
];

export default function Nav() {
  return (
    <nav className="mr-auto">
      <ul className="hidden xl:flex text-white text-base">
        {menuItems.map((menu, index) => (
          <li key={index} className="group leading-[88px] menu-item px-[10px]">
            <a
              href="#!"
              className="menu_link whitespace-nowrap group-hover:text-primary-color"
            >
              {menu.title}
            </a>
            <div className="sub-menu py-7 absolute hidden group-hover:block border-t-[1px] border-[#494b50] top-[88px] left-0 right-0 bg-[#202227]">
              <div className="container mx-auto px-4 xl:px-8 lg:px-4">
                <ul className="header-list flex justify-center gap-2">
                  {menu.subMenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`group/item ${
                        subItem.title ? "bg-[#292b30]" : ""
                      } py-4 px-6 leading-none basis-1/5`}
                    >
                      <div className="h-full flex flex-col">
                        {subItem.title ? (
                          <>
                            <p className="font-medium">{subItem.title}</p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              {subItem.description}
                            </p>
                            <a
                              href="#!"
                              className="flex gap-2 mt-auto pt-[34px] text-primary-color leading-6 tracking-wide 
                                xl:group-hover/item:text-primary-color xl:group-hover/item:gap-[17px] transition-all duration-300"
                            >
                              Read more
                              <Image
                                src="/white-arrow.svg"
                                alt="arrow-right"
                                width={24}
                                height={24}
                                className="filter-custom-orange"
                              />
                            </a>
                          </>
                        ) : (
                          subItem.paragraphs?.map((text, textIndex) => (
                            <p
                              key={textIndex}
                              className={`text-sm text-[#a4a5a7] ${
                                textIndex > 0 ? "mt-5" : ""
                              } hover:text-primary-color`}
                            >
                              {text}
                            </p>
                          ))
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
