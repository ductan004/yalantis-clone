import Image from "next/image";
import Button from "./Button";

const Header = () => {
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
          <nav className="mr-auto">
            <ul className="hidden xl:flex text-white text-base">
              <li className="group leading-[88px] menu-item px-[10px]">
                <a
                  href="#!"
                  className="menu_link whitespace-nowrap group-hover:text-primary-color"
                >
                  SERVICES
                </a>
                {/* SubMenu */}
                <div className="sub-menu py-7 absolute hidden group-hover:block border-t-[1px] border-[#494b50] top-[88px] left-0 right-0 bg-[#202227]">
                  <div className="container mx-auto px-4 xl:px-8 lg:px-4">
                    {/*SubmenuItem */}
                    <div>
                      <ul className="header-list flex justify-center gap-2">
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Custom software development
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Tailored software solutions and software
                              augmentation services to meet unique business
                              needs, drive operational efficiency, and stimulate
                              business expansion
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Dedicated development teams
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Dedicated development teams and professionals that
                              work exclusively on your project and ensure
                              top-notch tailored solutions
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">IT consulting</p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Expert guidance on leveraging advanced
                              technologies to optimize business processes, drive
                              innovation, and achieve strategic objectives
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Digital transformation
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Digital transformation services for streamlined
                              business processes, improved customer experiences,
                              and enhanced operational efficiency
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">IT consulting</p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Expert guidance on leveraging advanced
                              technologies to optimize business processes, drive
                              innovation, and achieve strategic objectives
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="group leading-[88px] menu-item px-[10px]">
                <a
                  href="#!"
                  className="menu_link whitespace-nowrap group-hover:text-primary-color"
                >
                  EXPERTISE
                </a>
                {/* SubMenu */}
                <div className="sub-menu py-7 absolute hidden group-hover:block border-t-[1px] border-[#494b50] top-[88px] left-0 right-0 bg-[#202227]">
                  <div className="container mx-auto px-4 xl:px-8 lg:px-4">
                    {/*SubmenuItem */}
                    <div>
                      <ul className="header-list flex justify-center gap-2">
                        <li className="group/item px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="text-sm text-[#a4a5a7] hover:text-primary-color">
                              Expert guidance on leveraging advanced
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7] hover:text-primary-color">
                              Expert guidance on leveraging advanced
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7] hover:text-primary-color">
                              Expert guidance on leveraging advanced
                            </p>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Custom software development
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Tailored software solutions and software
                              augmentation services to meet unique business
                              needs, drive operational efficiency, and stimulate
                              business expansion
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Dedicated development teams
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Dedicated development teams and professionals that
                              work exclusively on your project and ensure
                              top-notch tailored solutions
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">IT consulting</p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Expert guidance on leveraging advanced
                              technologies to optimize business processes, drive
                              innovation, and achieve strategic objectives
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="text-sm text-[#a4a5a7] hover:text-primary-color">
                              Digital transformation
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7] hover:text-primary-color">
                              Digital transformation
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7] hover:text-primary-color">
                              Digital transformation
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group leading-[88px] menu-item px-[10px]">
                <a
                  href="#!"
                  className="menu_link whitespace-nowrap group-hover:text-primary-color"
                >
                  INDUSTRIES
                </a>
                {/* SubMenu */}
                <div className="sub-menu py-7 absolute hidden group-hover:block border-t-[1px] border-[#494b50] top-[88px] left-0 right-0 bg-[#202227]">
                  <div className="container mx-auto px-4 xl:px-8 lg:px-4">
                    {/*SubmenuItem */}
                    <div>
                      <ul className="header-list flex justify-center gap-2">
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">IT consulting</p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Expert guidance on leveraging advanced
                              technologies to optimize business processes, drive
                              innovation, and achieve strategic objectives
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Custom software development
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Tailored software solutions and software
                              augmentation services to meet unique business
                              needs, drive operational efficiency, and stimulate
                              business expansion
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Dedicated development teams
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Dedicated development teams and professionals that
                              work exclusively on your project and ensure
                              top-notch tailored solutions
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="text-sm text-[#a4a5a7] hover:text-primary-color">
                              Expert guidance on leveraging advanced
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7] hover:text-primary-color">
                              Expert guidance on leveraging advanced
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7] hover:text-primary-color">
                              Expert guidance on leveraging advanced
                            </p>
                          </div>
                        </li>

                        <li className="group/item px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="text-sm text-[#a4a5a7] hover:text-primary-color">
                              Digital transformation
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7] hover:text-primary-color">
                              Digital transformation
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7] hover:text-primary-color">
                              Digital transformation
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group leading-[88px] menu-item px-[10px]">
                <a
                  href="#!"
                  className="menu_link whitespace-nowrap group-hover:text-primary-color"
                >
                  SUCCESS STORIES
                </a>
                {/* SubMenu */}
                <div className="sub-menu py-7 absolute hidden group-hover:block border-t-[1px] border-[#494b50] top-[88px] left-0 right-0 bg-[#202227]">
                  <div className="container mx-auto px-4 xl:px-8 lg:px-4">
                    {/*SubmenuItem */}
                    <div>
                      <ul className="header-list flex justify-center gap-2">
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Digital transformation
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Digital transformation services for streamlined
                              business processes, improved customer experiences,
                              and enhanced operational efficiency
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">IT consulting</p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Expert guidance on leveraging advanced
                              technologies to optimize business processes, drive
                              innovation, and achieve strategic objectives
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group leading-[88px] menu-item px-[10px]">
                <a
                  href="#!"
                  className="menu_link whitespace-nowrap group-hover:text-primary-color"
                >
                  SOLUTION HUB
                </a>
                {/* SubMenu */}
                <div className="sub-menu py-7 absolute hidden group-hover:block border-t-[1px] border-[#494b50] top-[88px] left-0 right-0 bg-[#202227]">
                  <div className="container mx-auto px-4 xl:px-8 lg:px-4">
                    {/*SubmenuItem */}
                    <div>
                      <ul className="header-list flex justify-center gap-2">
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Digital transformation
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Digital transformation services for streamlined
                              business processes, improved customer experiences,
                              and enhanced operational efficiency
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">IT consulting</p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Expert guidance on leveraging advanced
                              technologies to optimize business processes, drive
                              innovation, and achieve strategic objectives
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">IT consulting</p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Expert guidance on leveraging advanced
                              technologies to optimize business processes, drive
                              innovation, and achieve strategic objectives
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group leading-[88px] menu-item px-[10px]">
                <a
                  href="#!"
                  className="menu_link whitespace-nowrap group-hover:text-primary-color"
                >
                  COMPANY
                </a>

                {/* SubMenu */}
                <div className="sub-menu py-7 absolute hidden group-hover:block border-t-[1px] border-[#494b50] top-[88px] left-0 right-0 bg-[#202227]">
                  <div className="container mx-auto px-4 xl:px-8 lg:px-4">
                    {/*SubmenuItem */}
                    <div>
                      <ul className="header-list flex justify-center gap-2">
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Digital transformation
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Digital transformation services for streamlined
                              business processes, improved customer experiences,
                              and enhanced operational efficiency
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">IT consulting</p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Expert guidance on leveraging advanced
                              technologies to optimize business processes, drive
                              innovation, and achieve strategic objectives
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group leading-[88px] menu-item px-[10px]">
                <a
                  href="#!"
                  className="menu_link whitespace-nowrap group-hover:text-primary-color"
                >
                  INSIGHTS
                </a>
                {/* SubMenu */}
                <div className="sub-menu py-7 absolute hidden group-hover:block border-t-[1px] border-[#494b50] top-[88px] left-0 right-0 bg-[#202227]">
                  <div className="container mx-auto px-4 xl:px-8 lg:px-4">
                    {/*SubmenuItem */}
                    <div>
                      <ul className="header-list flex justify-center gap-2">
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Digital transformation
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Digital transformation services for streamlined
                              business processes, improved customer experiences,
                              and enhanced operational efficiency
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">IT consulting</p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Expert guidance on leveraging advanced
                              technologies to optimize business processes, drive
                              innovation, and achieve strategic objectives
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">
                              Digital transformation
                            </p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Digital transformation services for streamlined
                              business processes, improved customer experiences,
                              and enhanced operational efficiency
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                        <li className="group/item bg-[#292b30] py-4 px-6 leading-none basis-1/5">
                          <div className="h-full flex flex-col">
                            <p className="font-medium">IT consulting</p>
                            <p className="text-sm mt-5 text-[#a4a5a7]">
                              Expert guidance on leveraging advanced
                              technologies to optimize business processes, drive
                              innovation, and achieve strategic objectives
                            </p>
                            <span
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
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Action */}
          <Button href="#!" text="CONTACT US" className="hidden md:block" />

          {/* Navbar Mobile */}
          <a
            href="#!"
            className="w-12 h-12 flex xl:hidden justify-center items-center ml-8"
          >
            <Image src="/navbar.svg" alt="navbar" width={32} height={32} />
          </a>
        </div>
      </div>

      <div className=""></div>
    </header>
  );
};
export default Header;
