import Image from "next/image";
import Button from "./components/Button";
export default function Home() {
  return (
    <main className="text-white">
      <section className="hero bg-primary-bg py-[35px] font-light flex flex-col justify-center">
        <div className="container mx-auto px-8">
          {/* Title Hero */}
          <h1 className="hero_heading text-[56px] leading-[56px] max-w-[800px]">
            <span className="text-primary-color">Software development </span>
            company that delivers for
          </h1>
          {/* Brand Image */}
          <div className="flex gap-x-[70px] mt-[50px] select-none">
            <a href="#!">
              <Image
                src="/hero-1.svg"
                alt="KPMG"
                className="hover:grayscale-[100] transition-filter ease-in duration-150"
                width={124}
                height={50}
              />
            </a>
            <a href="#!">
              <Image
                src="/hero-2.svg"
                alt="Home connect for bosch"
                className="hover:grayscale-[100] transition-filter ease-in duration-150"
                width={217}
                height={50}
              />
            </a>
            <a href="#!">
              <Image
                src="/hero-3.svg"
                alt="ToYoTa"
                className="hover:grayscale-[100] transition-filter ease-in duration-150"
                width={336}
                height={50}
              />
            </a>
          </div>
          <div>
            <Button
              href="#!"
              className="bg-primary-color text-white hover:opacity-90 mt-28 font-medium"
              text="CONTACT US"
            ></Button>
          </div>
        </div>
      </section>

      <section className="services bg-primary-bg pt-0 pb-20">
        <div className="container mx-auto px-8">
          <ul className="service-list grid grid-cols-4 gap-3">
            {/* Service Item 1 */}
            <li className="relative group border border-[#494b50] pt-8 pr-6 pb-7 pl-6 hover:-translate-y-6 transition-transform duration-300 hover:bg-gradient-overlay overflow-hidden">
              <div className="block h-full">
                <a href="#!" className="flex flex-col">
                  <div className="absolute top-[120px] h-56 max-h-full left-0 right-0 blur-[80px] rounded-[50%] bg-primary-color invisible opacity-0 group-hover:opacity-[0.18] group-hover:visible transition-opacity duration-300 ease-in-out"></div>
                  <h3 className="max-w-[224px] font-medium leading-6 tracking-wide">
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
                  <span className="service-link flex gap-2 pt-[38px] leading-6 uppercase tracking-widest group-hover:text-primary-color group-hover:gap-[17px] transition-all duration-300">
                    Read more
                    <Image
                      src="/white-arrow.svg"
                      alt="arrow-right"
                      width={24}
                      height={24}
                      className="group-hover:filter-custom-orange"
                    />
                  </span>
                </a>
              </div>
            </li>
            <li className="relative group border border-[#494b50] pt-8 pr-6 pb-7 pl-6 hover:-translate-y-6 transition-transform duration-300 hover:bg-gradient-overlay overflow-hidden">
              <div className="flex h-full">
                <a href="#!" className="flex flex-col">
                  <div className="absolute top-[120px] h-56 max-h-full left-0 right-0 blur-[80px] rounded-[50%] bg-primary-color invisible opacity-0 group-hover:opacity-[0.18] group-hover:visible transition-opacity duration-300 ease-in-out"></div>
                  <h3 className="max-w-[224px] font-medium leading-6 tracking-wide">
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
                  <span className="flex gap-2 mt-auto leading-6 uppercase tracking-widest group-hover:text-primary-color group-hover:gap-[17px] transition-all duration-300">
                    Read more
                    <Image
                      src="/white-arrow.svg"
                      alt="arrow-right"
                      width={24}
                      height={24}
                      className="group-hover:filter-custom-orange"
                    />
                  </span>
                </a>
              </div>
            </li>
            <li className="relative group border border-[#494b50] pt-8 pr-6 pb-7 pl-6 hover:-translate-y-6 transition-transform duration-300 hover:bg-gradient-overlay overflow-hidden">
              <div className="flex h-full">
                <a href="#!" className="flex flex-col">
                  <div className="absolute top-[120px] h-56 max-h-full left-0 right-0 blur-[80px] rounded-[50%] bg-primary-color invisible opacity-0 group-hover:opacity-[0.18] group-hover:visible transition-opacity duration-300 ease-in-out"></div>
                  <h3 className="max-w-[224px] font-medium leading-6 tracking-wide">
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
                  <span className="service-link flex gap-2 pt-[38px] leading-6 uppercase tracking-widest group-hover:text-primary-color group-hover:gap-[17px] transition-all duration-300">
                    Read more
                    <Image
                      src="/white-arrow.svg"
                      alt="arrow-right"
                      width={24}
                      height={24}
                      className="group-hover:filter-custom-orange"
                    />
                  </span>
                </a>
              </div>
            </li>
            <li className="relative group border border-[#494b50] pt-8 pr-6 pb-7 pl-6 hover:-translate-y-6 transition-transform duration-300 hover:bg-gradient-overlay overflow-hidden">
              <div className="flex h-full">
                <a href="#!" className="flex flex-col">
                  <div className="absolute top-[120px] h-56 max-h-full left-0 right-0 blur-[80px] rounded-[50%] bg-primary-color invisible opacity-0 group-hover:opacity-[0.18] group-hover:visible transition-opacity duration-300 ease-in-out"></div>
                  <h3 className="max-w-[224px] font-medium leading-6 tracking-wide">
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
                  <span className="flex gap-2 mt-auto leading-6 uppercase tracking-widest group-hover:text-primary-color group-hover:gap-[17px] transition-all duration-300">
                    Read more
                    <Image
                      src="/white-arrow.svg"
                      alt="arrow-right"
                      width={24}
                      height={24}
                      className="group-hover:filter-custom-orange"
                    />
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
