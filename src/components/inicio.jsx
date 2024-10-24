import React from "react";

export const Inicio = () => {
  return (
    <section className='inicio before:contents(" ") flex h-[calc(100vh)] w-full flex-col items-center justify-center bg-[url("bg.jpg")] bg-cover bg-center px-5 text-center before:absolute before:bottom-0 before:h-32 before:w-full before:bg-gradient-to-t before:from-black before:to-transparent'>
      <div className="flex w-full max-w-4xl flex-col items-center justify-center text-center">
        <h2 className="font-title start__animation text-4xl font-bold text-[#efb810] text-shadow md:text-5xl">
          Esculturas y obras a pedido
        </h2>
        <p className="font-text start__animation my-3 max-w-[600px] text-center text-xl font-light text-white text-shadow md:max-w-[650px] md:text-2xl">
          Fabricamos obras de arte exclusivas con proceso de Hidrocromo, unicos
          en el pais.
        </p>
      </div>
    </section>
  );
};
