import React from "react";

interface ButtonProps {
  href: string;
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, text, className = "" }) => {
  return (
    <button
      className={`py-3 px-7 border rounded-3xl border-primary-color 
        text-primary-color transition-colors duration-300 ease-in-out hover:bg-primary-color hover:text-white whitespace-nowrap uppercase ${className}`}
    >
      <a href={href} className="tracking-wide">
        {text}
      </a>
    </button>
  );
};

export default Button;
