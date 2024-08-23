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
            <ul className="hidden xl:flex text-white gap-5 text-base">
              <li className="hover:text-primary-color">
                <a href="#!" className="menu_link whitespace-nowrap">
                  SERVICES
                </a>
              </li>
              <li className="hover:text-primary-color">
                <a href="#!" className="menu_link whitespace-nowrap">
                  EXPERTISE
                </a>
              </li>
              <li className="hover:text-primary-color">
                <a href="#!" className="menu_link whitespace-nowrap">
                  INDUSTRIES
                </a>
              </li>
              <li className="hover:text-primary-color">
                <a href="#!" className="menu_link whitespace-nowrap">
                  SUCCESS STORIES
                </a>
              </li>
              <li className="hover:text-primary-color">
                <a href="#!" className="menu_link whitespace-nowrap">
                  SOLUTION HUB
                </a>
              </li>
              <li className="hover:text-primary-color">
                <a href="#!" className="menu_link whitespace-nowrap">
                  COMPANY
                </a>
              </li>
              <li className="hover:text-primary-color">
                <a href="#!" className="menu_link whitespace-nowrap">
                  INSIGHTS
                </a>
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
    </header>
  );
};
export default Header;
