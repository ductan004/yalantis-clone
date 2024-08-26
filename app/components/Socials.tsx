import Image from "next/image";

export default function Socials({ className = "" }) {
  return (
    <div className={`socials flex gap-8 ${className}`}>
      <a href="#!">
        <Image
          className="w-8 h-8 hover:filter-custom-orange"
          src="/linkedin.svg"
          alt="navbar"
          width={0}
          height={0}
        />
      </a>
      <a href="#!">
        <Image
          className="w-8 h-8 hover:filter-custom-orange"
          src="/github.svg"
          alt="navbar"
          width={0}
          height={0}
        />
      </a>
      <a href="#!">
        <Image
          className="w-8 h-8 hover:filter-custom-orange"
          src="/dou.svg"
          alt="navbar"
          width={0}
          height={0}
        />
      </a>
      <a href="#!">
        <Image
          className="w-8 h-8 hover:filter-custom-orange"
          src="/inst.svg"
          alt="navbar"
          width={0}
          height={0}
        />
      </a>
      <a href="#!">
        <Image
          className="w-8 h-8 hover:filter-custom-orange"
          src="/youtube.svg"
          alt="navbar"
          width={0}
          height={0}
        />
      </a>
    </div>
  );
}
