import Image from "next/image";
import Button from "./Button";

const Header = () => {
  return (
    <header className="header bg-primary-bg">
      <div className="container mx-auto px-8">
        <div className="flex h-[88px] items-center">
          {/* Logo */}
          <div className="header-logo mr-auto">
            <a href="#!" className="header-logo__link">
              <Image
                src="/logo_white.svg"
                alt="Yalantis logo"
                className="header-logo__img"
                width={86}
                height={20}
              />
            </a>
          </div>
          {/* Menu */}
          <nav className="mr-auto">
            <ul className="hover:text-primary-colors flex text-white gap-5 text-base">
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
          <Button href="#!" text="CONTACT US" />
        </div>
      </div>
    </header>
  );
};
export default Header;
