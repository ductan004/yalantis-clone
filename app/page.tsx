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
          <ul className="about-logo-list grid grid-cols-4 xl:grid-cols-7 mt-[25px] select-none">
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

      {/* contact-us*/}
      <section className="contact pt-[60px] pb-28 xl:pt-[80px]">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="grid xl:grid-cols-2 gap-8">
            <div className="contact-form p-8 bg-white text-[#1c1e24]">
              <h3 className="contact-title text-2xl">
                Collaborate with Yalantis
              </h3>
              <form action="" className="mt-11">
                <div className="grid grid-cols-2 gap-y-16 gap-x-7">
                  <div className="input-group relative">
                    <input
                      type="text"
                      name="fullName"
                      id="fullname"
                      placeholder="Full Name"
                      className="text-xl peer w-full border-b border-[#9e9fa4] h-8 focus:outline-none placeholder:text-transparent focus:border-gray-500"
                    />
                    <label
                      htmlFor="fullname"
                      className="pointer-events-none text-xs absolute top-0 left-0 text-[#9e9fa4] origin-left -translate-y-5
                      transform peer-placeholder-shown:top-6  peer-placeholder-shown:text-base peer-focus:text-xs peer-focus:top-0 peer-focus:left-0 transition-all duration-300"
                    >
                      Full Name
                      <b className="text-primary-color">*</b>
                    </label>
                  </div>
                  <div className="input-group relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      className="text-xl peer w-full border-b border-[#9e9fa4] h-8 focus:outline-none placeholder:text-transparent focus:border-gray-500"
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none text-xs absolute top-0 left-0 text-[#9e9fa4] origin-left -translate-y-5
                      transform peer-placeholder-shown:top-6  peer-placeholder-shown:text-base peer-focus:text-xs peer-focus:top-0 peer-focus:left-0 transition-all duration-300"
                    >
                      Email Address
                      <b className="text-primary-color">*</b>
                    </label>
                  </div>
                  <div className="input-group relative">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company Name"
                      className="text-xl peer w-full border-b border-[#9e9fa4] h-8 focus:outline-none placeholder:text-transparent focus:border-gray-500"
                    />
                    <label
                      htmlFor="company"
                      className="pointer-events-none text-xs absolute top-0 left-0 text-[#9e9fa4] origin-left -translate-y-5
                      transform peer-placeholder-shown:top-6  peer-placeholder-shown:text-base peer-focus:text-xs peer-focus:top-0 peer-focus:left-0 transition-all duration-300"
                    >
                      Company Name
                    </label>
                  </div>
                  <div className="input-group relative">
                    <input
                      type="number"
                      name="phome"
                      id="phome"
                      placeholder="Phone Number"
                      className="text-xl peer w-full border-b border-[#9e9fa4] h-8 focus:outline-none placeholder:text-transparent focus:border-gray-500"
                    />
                    <label
                      htmlFor="fullname"
                      className="pointer-events-none text-xs absolute top-0 left-0 text-[#9e9fa4] origin-left -translate-y-5
                      transform peer-placeholder-shown:top-6  peer-placeholder-shown:text-base peer-focus:text-xs peer-focus:top-0 peer-focus:left-0 transition-all duration-300"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>
                <div className="input-group relative mt-16">
                  <input
                    type="text"
                    name="aboutproject"
                    id="aboutproject"
                    placeholder="About your project"
                    className="text-xl peer w-full border-b border-[#9e9fa4] h-8 focus:outline-none placeholder:text-transparent focus:border-gray-500"
                  />
                  <label
                    htmlFor="aboutproject"
                    className="pointer-events-none text-xs absolute top-0 left-0 text-[#9e9fa4] origin-left -translate-y-5
                      transform peer-placeholder-shown:top-6  peer-placeholder-shown:text-base peer-focus:text-xs peer-focus:top-0 peer-focus:left-0 transition-all duration-300"
                  >
                    About your project
                    <b className="text-primary-color">*</b>
                  </label>
                </div>
                <div className="mt-10">
                  <div className="file-group">
                    <input type="file" id="file-upload" className="" hidden />
                    <label
                      htmlFor="file-upload"
                      className="group flex items-center space-x-2 text-gray-500 cursor-pointer hover:text-primary-color"
                    >
                      <Image
                        src={"/file.svg"}
                        alt="file"
                        width={8}
                        height={16}
                        className="group-hover:filter-custom-orange"
                      ></Image>
                      <span className="text-xl">Attach a file</span>
                    </label>
                  </div>
                  <p className="text-xs text-[#9e9fa4] mt-3">
                    Please upload a file with one of the following
                    extensions:.pdf, .docx, .odt, .ods, .ppt/x, .xls/x,
                    .rtf,.txt
                  </p>
                </div>
                <div className="check-group mt-6 flex flex-col gap-2">
                  {/* Check box 1 */}
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center cursor-pointer"
                      htmlFor="check"
                    >
                      <input
                        type="checkbox"
                        className="peer relative h-4 w-4 
                        cursor-pointer appearance-none 
                        rounded border border-[#9e9fa4] 
                       checked:border-primary-color checked:bg-primary-color
                       "
                        id="check"
                      />
                      <span
                        className="absolute text-white 
                                    transition-opacity 
                                    opacity-0 pointer-events-none 
                                    top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 
                                    peer-checked:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px text-sm cursor-pointer select-none pl-4"
                      htmlFor="check"
                    >
                      I have read {""}
                      <span className="underline hover:text-primary-color">
                        Privacy Notice
                      </span>
                      <b className="text-primary-color">*</b>
                    </label>
                  </div>

                  {/* Check box 2 */}
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center cursor-pointer"
                      htmlFor="check1"
                    >
                      <input
                        type="checkbox"
                        className="peer relative h-4 w-4 
                        cursor-pointer appearance-none 
                        rounded border border-[#9e9fa4] 
                       checked:border-primary-color checked:bg-primary-color
                       "
                        id="check1"
                      />
                      <span
                        className="absolute text-white 
                                    transition-opacity 
                                    opacity-0 pointer-events-none 
                                    top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 
                                    peer-checked:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px text-sm cursor-pointer select-none pl-4"
                      htmlFor="check1"
                    >
                      I agree to receive marketing materials about news, events,
                      and proposals from Yalantis
                    </label>
                  </div>

                  <div className="mt-10">
                    <Button
                      text="Send massage"
                      href="#!"
                      className="w-full bg-primary-color text-white"
                    ></Button>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact-info py-[27px]">
              <h3 className="contact-info__title text-[#a4a5a7] text-xl tracking-wide">
                Yalantis in brief
              </h3>
              <ul className="contact-info__list grid gap-4 md:grid-cols-3 justify-between mt-6">
                <li className="contact-item">
                  <p className="contact-item__title text-[40px] text-primary-color leading-tight font-light">
                    15+
                  </p>
                  <p className="contact-item__desc mt-[10px] leading-tight text-[#f3f4f4]">
                    years of experience
                  </p>
                </li>
                <li className="contact-item">
                  <p className="contact-item__title text-[40px] text-primary-color leading-tight font-light">
                    500+
                  </p>
                  <p className="contact-item__desc mt-[10px] leading-tight text-[#f3f4f4]">
                    IT experts aboard
                  </p>
                </li>
                <li className="contact-item">
                  <p className="contact-item__title text-[40px] text-primary-color leading-tight font-light">
                    35+
                  </p>
                  <p className="contact-item__desc mt-[10px] leading-tight text-[#f3f4f4]">
                    active clients
                  </p>
                </li>
              </ul>
              {/* Brand Image */}
              <div className="grid grid-cols-2 mt-[50px] justify-between select-none gap-y-6 md:mt-[80px] md:flex xl:gap-x-[70px] xl:justify-normal xl:mt-[50px]">
                <a href="#!" className="flex justify-center xl:justify-start">
                  <Image
                    src="/hero-1.svg"
                    alt="KPMG"
                    className="h-[34px] md:h-auto grayscale-[100]"
                    width={124}
                    height={50}
                  />
                </a>
                <a href="#!" className="flex justify-center xl:justify-start">
                  <Image
                    src="/hero-2.svg"
                    alt="Home connect for bosch"
                    className="h-[34px] md:h-auto grayscale-[100]"
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
                    className="h-[34px] md:h-auto grayscale-[100]"
                    width={336}
                    height={50}
                  />
                </a>
              </div>
              <div className="separate w-full h-[1px] bg-[#494b50] my-10"></div>
              {/* Info contact */}

              <ul className="info__list grid md:grid-cols-2 gap-y-6">
                <li>
                  <p className="text-[#a4a5a7]">Project inquiries</p>
                  <a
                    className="mt-2 inline-block text-xl hover:text-primary-color"
                    href="mailto:nguyenductan004@gmail.com"
                  >
                    hello@yalantis.com
                  </a>
                </li>
                <li>
                  <p className="text-[#a4a5a7]">Careers</p>
                  <a
                    className="mt-2 inline-block text-xl hover:text-primary-color"
                    href="mailto:nguyenductan004@gmail.com"
                  >
                    careers@yalantis.com
                  </a>
                </li>
                <li>
                  <p className="text-[#a4a5a7]">Phone number</p>
                  <a
                    className="mt-2 inline-block text-xl hover:text-primary-color"
                    href="tel:0339285356"
                  >
                    + 1 213 4019311
                  </a>
                </li>
              </ul>
              {/* Our offices */}
              <div className="mt-11">
                <p className="text-[#d2d2d3]">Our offices</p>
                <ul className="grid md:grid-cols-4 md:justify-between mt-3">
                  <li className="relative group pb-4">
                    <div className="flex items-center gap-x-2">
                      <Image
                        src={`/poland.svg`}
                        alt="poland"
                        width={24}
                        height={16}
                      ></Image>
                      <p>Poland</p>
                      <Image
                        src={`/contact-arrow.svg`}
                        alt="arrow"
                        width={0}
                        height={0}
                        className="h-[10px] w-[10px] hidden xl:block group-hover:rotate-180 transition-transform duration-300"
                      ></Image>
                    </div>
                    <div className="md:absolute top-8 left-0 flex py-4 xl:bg-[#272930] xl:shadow-location xl:px-[14px] xl:group-hover:opacity-100 xl:opacity-0">
                      <ul className="flex flex-col gap-2">
                        <li className="flex gap-2">
                          <Image
                            src={"location.svg"}
                            alt=""
                            width={0}
                            height={0}
                            className="w-[13px] h-[13px]"
                          ></Image>
                          <p className="text-sm">
                            123 Jerozolimskie avenue, Warszawa, 00-001
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="relative group pb-4">
                    <div className="flex items-center gap-x-2">
                      <Image
                        src={`/ukraine.svg`}
                        alt=""
                        width={24}
                        height={16}
                      ></Image>
                      <p>Ukraine</p>
                      <Image
                        src={`/contact-arrow.svg`}
                        alt="arrow"
                        width={0}
                        height={0}
                        className="h-[10px] w-[10px] hidden xl:block group-hover:rotate-180 transition-transform duration-300"
                      ></Image>
                    </div>
                    <div className="md:absolute top-8 left-0 flex py-4 xl:bg-[#272930] xl:shadow-location xl:px-[14px] xl:group-hover:opacity-100 xl:opacity-0">
                      <ul className="flex flex-col gap-2">
                        <li className="flex gap-2">
                          <Image
                            src={"location.svg"}
                            alt=""
                            width={0}
                            height={0}
                            className="w-[13px] h-[13px]"
                          ></Image>
                          <p className="text-sm">
                            12 Vasylya Stusa street, Lviv, 79000
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <Image
                            src={"location.svg"}
                            alt=""
                            width={0}
                            height={0}
                            className="w-[13px] h-[13px]"
                          ></Image>
                          <p className="text-sm">
                            5 Dmytra Yavornytskoho Avenue, Dnipro, 49005
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <Image
                            src={"location.svg"}
                            alt=""
                            width={0}
                            height={0}
                            className="w-[13px] h-[13px]"
                          ></Image>
                          <p className="text-sm">
                            8 Illinska street, Kyiv, 04070
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="relative group pb-4">
                    <div className="flex items-center gap-x-2">
                      <Image
                        src={`/cyprus.svg`}
                        alt="cyprus"
                        width={24}
                        height={16}
                      ></Image>
                      <p>Cyprus</p>
                      <Image
                        src={`/contact-arrow.svg`}
                        alt="arrow"
                        width={0}
                        height={0}
                        className="h-[10px] w-[10px] hidden xl:block group-hover:rotate-180 transition-transform duration-300"
                      ></Image>
                    </div>
                    <div className="md:absolute top-8 left-0 flex py-4 xl:bg-[#272930] xl:shadow-location xl:px-[14px] xl:group-hover:opacity-100 xl:opacity-0">
                      <ul className="flex flex-col gap-2">
                        <li className="flex gap-2">
                          <Image
                            src={"location.svg"}
                            alt=""
                            width={0}
                            height={0}
                            className="w-[13px] h-[13px]"
                          ></Image>
                          <p className="text-sm">
                            8 Athinon street, Larnaca, 6023
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="relative group pb-4">
                    <div className="flex items-center gap-x-2">
                      <Image
                        src={`/estonia.svg`}
                        alt="estonia"
                        width={24}
                        height={16}
                      ></Image>
                      <p>Estonia</p>
                      <Image
                        src={`/contact-arrow.svg`}
                        alt="arrow"
                        width={0}
                        height={0}
                        className="h-[10px] w-[10px] hidden xl:block group-hover:rotate-180 transition-transform duration-300"
                      ></Image>
                    </div>
                    <div className="md:absolute top-8 left-0 flex py-4 xl:bg-[#272930] xl:shadow-location xl:px-[14px] xl:group-hover:opacity-100 xl:opacity-0">
                      <ul className="flex flex-col gap-2">
                        <li className="flex gap-2">
                          <Image
                            src={"location.svg"}
                            alt=""
                            width={0}
                            height={0}
                            className="w-[13px] h-[13px]"
                          ></Image>
                          <p className="text-sm">12 Parda, Tallinn, 10151</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
