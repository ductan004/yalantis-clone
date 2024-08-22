import Image from "next/image";
import Button from "./components/Button";
import VideoReviews from "./components/VideoReviews";
import CaseStudies from "./components/CaseStudies";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="text-white bg-primary-bg">
      {/* Hero */}
      <section className="hero pt-[88px] font-light flex flex-col justify-center">
        <div className="container mx-auto px-4 xl:px-8">
          {/* Title Hero */}
          <h1 className="leading-[56px] max-w-[800px] tracking-wide text-2xl md:text-[46px] xl:text-[56px]">
            <span className="text-primary-color">Software development </span>
            company that delivers for
          </h1>
          {/* Brand Image */}
          <div className="grid grid-cols-2 mt-[50px] justify-between select-none gap-y-6 md:mt-[80px] md:flex xl:gap-x-[70px] xl:justify-normal xl:mt-[50px]">
            <a href="#!" className="flex justify-center xl:justify-start">
              <Image
                src="/hero-1.svg"
                alt="KPMG"
                className="h-[34px] md:h-auto hover:grayscale-[100] transition-filter ease-in duration-150"
                width={124}
                height={50}
              />
            </a>
            <a href="#!" className="flex justify-center xl:justify-start">
              <Image
                src="/hero-2.svg"
                alt="Home connect for bosch"
                className="h-[34px] md:h-auto hover:grayscale-[100] transition-filter ease-in duration-150"
                width={217}
                height={50}
              />
            </a>
            <a
              href="#!"
              className="flex col-span-2 justify-center xl:col-span-1 xl:justify-start"
            >
              <Image
                src="/hero-3.svg"
                alt="ToYoTa"
                className="h-[34px] md:h-auto hover:grayscale-[100] transition-filter ease-in duration-150"
                width={336}
                height={50}
              />
            </a>
          </div>
          <div className="flex justify-center xl:block">
            <Button
              href="#!"
              className="bg-primary-color text-white hover:opacity-90 mt-28 font-medium w-full sm:w-auto py-3 px-14 xl:px-7"
              text="CONTACT US"
            ></Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services py-[40px] md:py-[60px] lg:pb-[80px] lg:pt-0">
        <div className="container mx-auto px-4 xl:px-8">
          <ul className="service-list grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-3">
            {/* Service Item 1 */}
            <li className="relative group border border-[#494b50] pt-8 pr-6 pb-7 pl-6 transition-transform duration-300 overflow-hidden xl:hover:-translate-y-6 xl:hover:bg-gradient-overlay">
              <div className="block h-full">
                <a href="#!" className="flex flex-col">
                  <div className="absolute top-[120px] h-56 max-h-full left-0 right-0 blur-[80px] rounded-[50%] bg-primary-color invisible opacity-0 xl:group-hover:opacity-[0.18] xl:group-hover:visible transition-opacity duration-300 ease-in-out"></div>
                  <h3 className="font-medium leading-6 tracking-wide md:max-w-[224px]">
                    Custom software development
                  </h3>
                  <ul className="service-item__list mt-6 text-[#d2d2d3] text-sm flex flex-col gap-5">
                    <li>
                      <p className="service-item__text pl-8">
                        Solutions tailored to specific business needs
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Domain experience
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Technical excellence
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Process visibility
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Constraint management framework
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Compliance with non-functional requirements
                      </p>
                    </li>
                  </ul>
                  <span className="flex gap-2 mt-auto pt-[34px] text-primary-color leading-6 uppercase tracking-widest xl:text-white xl:group-hover:text-primary-color xl:group-hover:gap-[17px] transition-all duration-300">
                    Read more
                    <Image
                      src="/white-arrow.svg"
                      alt="arrow-right"
                      width={24}
                      height={24}
                      className="filter-custom-orange xl:filter-custom-white xl:group-hover:filter-custom-orange"
                    />
                  </span>
                </a>
              </div>
            </li>
            <li className="relative group border border-[#494b50] pt-8 pr-6 pb-7 pl-6 transition-transform duration-300 overflow-hidden xl:hover:-translate-y-6 xl:hover:bg-gradient-overlay">
              <div className="flex h-full">
                <a href="#!" className="flex flex-col">
                  <div className="absolute top-[120px] h-56 max-h-full left-0 right-0 blur-[80px] rounded-[50%] bg-primary-color invisible opacity-0 xl:group-hover:opacity-[0.18] xl:group-hover:visible transition-opacity duration-300 ease-in-out"></div>
                  <h3 className="md:max-w-[224px] font-medium leading-6 tracking-wide">
                    Development team augmentation
                  </h3>
                  <ul className="service-item__list mt-6 text-[#d2d2d3] text-sm flex flex-col gap-5">
                    <li>
                      <p className="service-item__text pl-8">
                        Off-site and on-site team staffing and ramp-up
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Extensive talent base
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Talent nurturing and retention policy
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Management of distributed
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Performance management
                      </p>
                    </li>
                  </ul>
                  <span className="flex gap-2 mt-auto pt-[34px] text-primary-color leading-6 uppercase tracking-widest xl:text-white xl:group-hover:text-primary-color xl:group-hover:gap-[17px] transition-all duration-300">
                    Read more
                    <Image
                      src="/white-arrow.svg"
                      alt="arrow-right"
                      width={24}
                      height={24}
                      className="filter-custom-orange xl:filter-custom-white xl:group-hover:filter-custom-orange"
                    />
                  </span>
                </a>
              </div>
            </li>
            <li className="relative group border border-[#494b50] pt-8 pr-6 pb-7 pl-6 transition-transform duration-300 overflow-hidden xl:hover:-translate-y-6 xl:hover:bg-gradient-overlay">
              <div className="flex h-full">
                <a href="#!" className="flex flex-col">
                  <div className="absolute top-[120px] h-56 max-h-full left-0 right-0 blur-[80px] rounded-[50%] bg-primary-color invisible opacity-0 xl:group-hover:opacity-[0.18] xl:group-hover:visible transition-opacity duration-300 ease-in-out"></div>
                  <h3 className="md:max-w-[224px] font-medium leading-6 tracking-wide">
                    IT consulting and digital advisory
                  </h3>
                  <ul className="service-item__list mt-6 text-[#d2d2d3] text-sm flex flex-col gap-5">
                    <li>
                      <p className="service-item__text pl-8">
                        Architecture assessment
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Technical feasibility audit
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Development process audit
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">Solution design</p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Proof of concept development
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Delivery optimization
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Development strategy
                      </p>
                    </li>
                  </ul>
                  <span className="flex gap-2 mt-auto pt-[34px] text-primary-color leading-6 uppercase tracking-widest xl:text-white xl:group-hover:text-primary-color xl:group-hover:gap-[17px] transition-all duration-300">
                    Read more
                    <Image
                      src="/white-arrow.svg"
                      alt="arrow-right"
                      width={24}
                      height={24}
                      className="filter-custom-orange xl:filter-custom-white xl:group-hover:filter-custom-orange"
                    />
                  </span>
                </a>
              </div>
            </li>
            <li className="relative group border border-[#494b50] pt-8 pr-6 pb-7 pl-6 transition-transform duration-300 overflow-hidden xl:hover:-translate-y-6 xl:hover:bg-gradient-overlay">
              <div className="flex h-full">
                <a href="#!" className="flex flex-col">
                  <div className="absolute top-[120px] h-56 max-h-full left-0 right-0 blur-[80px] rounded-[50%] bg-primary-color invisible opacity-0 xl:group-hover:opacity-[0.18] xl:group-hover:visible transition-opacity duration-300 ease-in-out"></div>
                  <h3 className="md:max-w-[224px] font-medium leading-6 tracking-wide">
                    Digital transformation
                  </h3>
                  <ul className="service-item__list mt-6 text-[#d2d2d3] text-sm flex flex-col gap-5">
                    <li>
                      <p className="service-item__text pl-8">
                        Functionality augmentation
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Legacy modernization
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Minimization of security breaches
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Process optimization and automation
                      </p>
                    </li>
                    <li>
                      <p className="service-item__text pl-8">
                        Cost reduction of IT support and maintenance
                      </p>
                    </li>
                  </ul>
                  <span className="flex gap-2 mt-auto pt-[34px] text-primary-color leading-6 uppercase tracking-widest xl:text-white xl:group-hover:text-primary-color xl:group-hover:gap-[17px] transition-all duration-300">
                    Read more
                    <Image
                      src="/white-arrow.svg"
                      alt="arrow-right"
                      width={24}
                      height={24}
                      className="filter-custom-orange xl:filter-custom-white xl:group-hover:filter-custom-orange"
                    />
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Video Reivews */}
      <section className="video-review py-20">
        <div className="container mx-auto px-4 xl:px-8">
          <h2 className="text-[24px] md:text-[46px] leading-[64px] font-light tracking-wide">
            Video testimonials
          </h2>
          <VideoReviews></VideoReviews>
        </div>
      </section>

      {/* About us */}
      <section className="about bg-white text-[#1c1e24] pt-[85px] pb-[70px]">
        <div className="container mx-auto px-4 xl:px-8">
          <h2 className="about__heading text-[54px] leading-[64px] font-light tracking-wide">
            <span className="text-primary-color">About </span>
            us
          </h2>
          <div className="about-content--wrap flex flex-col md:mt-3 gap-[43px] xl:gap-[35px] xl:flex-row xl:mt-5">
            <div className="about-content basis-2/3">
              <p className="about-desc text-xl leading-tight font-light">
                Since 2008, Yalantis has been helping companies in the FinTech,
                healthcare, real estate, supply chain management, and other
                industries succeed with custom software solutions. Driven by our
                clients’ business-specific needs and time and budget
                constraints, our software development company builds and
                augments secure, stable, scalable, and highly functional digital
                products to deliver maximum value and ensure business
                sustainability.
              </p>
              <ul className="about-list flex flex-col xl:flex-row gap-[52px] mt-[45px]">
                <li className="about-item">
                  <p className="about-item__title text-[50px] text-primary-color leading-[56px] font-light">
                    15+
                  </p>
                  <p className="about-item__desc mt-[5px] leading-tight text-[#77787c]">
                    years of experience in software engineering and IT
                    consulting
                  </p>
                </li>
                <li className="about-item">
                  <p className="about-item__title text-[50px] text-primary-color leading-[56px] font-light">
                    500+
                  </p>
                  <p className="about-item__desc mt-[5px] leading-tight text-[#77787c]">
                    software developers and other IT professionals on board
                  </p>
                </li>
                <li className="about-item">
                  <p className="about-item__title text-[50px] text-primary-color leading-[56px] font-light">
                    35+
                  </p>
                  <p className="about-item__desc mt-[5px] leading-tight text-[#77787c]">
                    active clients building and augmenting software with us
                  </p>
                </li>
              </ul>
            </div>
            <div className="about-office basis-1/3 px-8 py-6 bg-[#fafafa]">
              <h3 className="office__title text-[#77787c] text-xl tracking-wider">
                Our Offices
              </h3>
              <ul className="office-list grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8 mt-4">
                <li className="flex items-start gap-x-4">
                  <Image
                    src="/poland.svg"
                    alt="Poland"
                    className=""
                    width={24}
                    height={16}
                  />
                  <div>
                    <p className="office-country text-xl leading-6">Poland</p>
                    <p className="office-text text-[#77787c] mt-[2px]">
                      123 al. Jerozolimskie, Warsaw, 00-001
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-x-4">
                  <Image
                    src="/ukraine.svg"
                    alt="Ukraine"
                    className=""
                    width={24}
                    height={16}
                  />
                  <div>
                    <p className="office-country office-country text-xl leading-6">
                      Ukraine
                    </p>
                    <p className="office-text text-[#77787c] mt-[2px]">
                      12 Vasylya Stusa street, Lviv, 79000
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-x-4">
                  <Image
                    src="/cyprus.svg"
                    alt="Cyprus"
                    className=""
                    width={24}
                    height={16}
                  />
                  <div>
                    <p className="office-country office-country office-country text-xl leading-6">
                      Cyprus
                    </p>
                    <p className="office-text office-text text-[#77787c] mt-[2px]">
                      8 Athinon Street, Larnaca, 6023
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-x-4">
                  <Image
                    src="/estonia.svg"
                    alt="Estonia"
                    className=""
                    width={24}
                    height={16}
                  />
                  <div>
                    <p className="office-country office-country office-country office-country text-xl leading-6">
                      Estonia
                    </p>
                    <p className="office-text office-text office-text text-[#77787c] mt-[2px]">
                      12 Parda, Tallinn, 10151
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <ul className="about-logo-list grid grid-cols-4 xl:grid-cols-7 mt-[25px]">
            <li>
              <Image
                src="/iso_27701_2019.svg"
                alt="iso"
                className=""
                width={120}
                height={120}
              />
            </li>
            <li>
              <Image
                src="/iso_27701_2019.svg"
                alt="iso"
                className=""
                width={120}
                height={120}
              />
            </li>
            <li>
              <Image
                src="/iso_27701_2019.svg"
                alt="iso"
                className=""
                width={120}
                height={120}
              />
            </li>
            <li>
              <Image
                src="/aws_partner_logo_white-1.svg"
                alt="iso"
                className=""
                width={120}
                height={120}
              />
            </li>
            <li>
              <Image
                src="/clutch_staff_augmentation_company_ukr-1.svg"
                alt="iso"
                className=""
                width={120}
                height={120}
              />
            </li>
            <li>
              <Image
                src="/top-software-development-companies-3.svg"
                alt="iso"
                className=""
                width={120}
                height={120}
              />
            </li>
            <li>
              <Image
                src="/superbcompanies.com-original-3.svg"
                alt="iso"
                className=""
                width={120}
                height={120}
              />
            </li>
          </ul>
        </div>
      </section>

      {/* Case-Studies */}
      <section className="case-studies pt-[70px]">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="flex justify-between items-center lg:text-[56px] leading-[64px] font-light tracking-wide">
            <h2 className="text-[24px] md:text-[46px] leading-[64px] font-light tracking-wide">
              Case studies
            </h2>
            <div className="review-controls hidden lg:block">
              <div className="flex flex-row gap-6 select-none">
                <div className="case-prev flex group justify-center opacity-40 items-center w-16 h-16 rounded-[50%] border-2 bg-transparent cursor-pointer hover:border-primary-color hover:opacity-100">
                  <Image
                    src="/video-arrow.svg"
                    alt=""
                    className="group-hover:filter-custom-orange"
                    width={13}
                    height={7}
                  />
                </div>
                <div className="case-next flex group justify-center opacity-40 items-center w-16 h-16 rounded-[50%] border-2 bg-transparent cursor-pointer hover:border-primary-color hover:opacity-100">
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
          <CaseStudies></CaseStudies>
          <div className="case-cta pb-20 mt-10 ">
            <div className="case-bg py-10 pl-10 pr-6 flex justify-between items-center flex-col text-center gap-[22px] lg:flex-row lg:text-left">
              <div>
                <h3 className="case-cta__title text-xl max-w-[757px] tracking-wider uppercase">
                  LOOKING FOR A RELIABLE SOFTWARE DEVELOPMENT COMPANY?
                </h3>
                <p className="case-cta__desc mt-[6px] max-w-[670px] font-light">
                  Build a high-quality FinTech product designed for seamless
                  scaling, active user acquisition, and stable performance under
                  high loads with Yalantis
                </p>
              </div>
              <Button
                href="#!"
                text="Book a call"
                className="uppercase"
              ></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Faq */}
      <section className="faq bg-[#f5f5f5] text-[#1c1e24] pt-[91px] pb-[80px]">
        <div className="container mx-auto px-4 xl:px-8">
          <h2 className="faq__heading uppercase text-center text-[56px] leading-[64px] font-light tracking-wide">
            faq
          </h2>
          <FAQ></FAQ>
        </div>
      </section>
    </main>
  );
}
