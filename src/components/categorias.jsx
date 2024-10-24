import React from "react";

export const Categorias = () => {
  return (
    <section className="font-title mx-auto flex w-full max-w-5xl flex-col items-center justify-center pt-14 xs:gap-[20px] xs:pt-32">
      <div className="flex w-full flex-col xs:flex-row xs:gap-[20px]">
        <article className="category flex h-72 w-full flex-col items-center animation__show justify-center bg-[url('esculturas.jpg')] bg-cover bg-center text-white text-shadow  md:h-96">
          <h3 className="text-3xl font-bold md:text-4xl">Esculturas</h3>
        </article>
        <article className="category flex h-72 w-full flex-col items-center justify-center animation__show border-y-2 border-zinc-950 bg-[url('obras.jpg')] bg-cover bg-top text-white text-shadow hover:text-[#efb810] xs:border-none md:h-96">
          <h3 className="text-3xl font-bold md:text-4xl">Obras</h3>
        </article>
      </div>

      <article className="category flex h-72 w-full flex-col items-center animation__show justify-center bg-[url('deco.jpg')] bg-cover bg-center text-white text-shadow hover:text-[#efb810] md:h-96">
        <h3 className="text-3xl font-bold md:text-4xl">Deco</h3>
      </article>
    </section>
  );
};
