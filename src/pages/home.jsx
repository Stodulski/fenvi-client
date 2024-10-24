import React from "react";
import { Inicio } from "../components/inicio";
import { Categorias } from "../components/categorias";
import { Nosotros } from "../components/nosotros";
import { Footer } from "../components/footer";

export const Home = () => {
  return (
    <main className="bg-black bg-[url('bg2.svg')] bg-cover bg-center">
      <Inicio />
      <Nosotros />
      <Categorias />
      <Footer />
    </main>
  );
};
