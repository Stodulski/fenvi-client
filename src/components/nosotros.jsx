import React from "react";

export const Nosotros = () => {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-5 pt-14 text-center xs:pt-32">
      <h3 className="font-title animation__show text-4xl font-semibold text-[#efb810]">
        Fenvi Art
      </h3>
      <p className="font-text animation__show mb-5 mt-2 max-w-2xl font-light text-white md:text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat optio
        suscipit delectus aut ipsum obcaecati officia excepturi saepe assumenda
        pariatur amet totam quisquam dolor odio voluptate explicabo, consequatur
        repudiandae dolore?
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-2 xs:flex-row">
        <button className="font-text animation__show w-full border border-[#efb810] px-7 py-2 text-white duration-200 hover:bg-[#efb810] hover:text-black xs:w-auto xs:text-lg">
          Contactar
        </button>
        <a
          href="#"
          className="font-text animation__show w-full border border-[#efb810] bg-[#efb810] px-7 py-2 duration-200 hover:bg-[#dfb741] xs:w-auto xs:text-lg"
        >
          Descargar Catalogo
        </a>
      </div>
    </section>
  );
};
