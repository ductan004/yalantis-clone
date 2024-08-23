import Image from "next/image";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-primary-bg pt-[104px] pb-[143px]">
      <div className="container mx-auto px-4 xl:px-8 lg:px-4">
        <div className="grid">
          <div className="footer-menu">
            <div className="footer-menu-list"></div>
          </div>
          <div className="footer-info"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
