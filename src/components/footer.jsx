import React from "react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
export const Footer = () => {
  return (
    <footer className="font-text flex flex-col items-center justify-center gap-7 bg-transparent py-14 font-light text-[#efb810] xs:py-32 md:gap-5 md:text-xl">
      <a href="#">
        <FaInstagram className="rounded-full border border-[#efb810] p-3 text-6xl duration-200 hover:bg-[#efb810] hover:text-black" />
      </a>
      <div className="flex flex-col items-center justify-center">
        <p className="">© 2024 Fenvi art</p>
        <p>Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
