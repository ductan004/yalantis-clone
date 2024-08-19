import Image from "next/image";
import Button from "./components/Button";
export default function Home() {
  return (
    <main>
      <section className="hero bg-primary-bg py-[35px] font-light text-white flex flex-col justify-center">
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
    </main>
  );
}
