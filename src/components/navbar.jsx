import React from "react";
import useToggleMenu from "../hooks/useToggleMenu";

export const Navbar = () => {
  const { menuState, toggleMenu, menuRef, scrolled } = useToggleMenu();
  return (
    <header
      className={`navbar__animation fixed z-50 flex h-14 w-screen items-center justify-center duration-300 ${scrolled ? "bg-black/80 shadow-2xl backdrop-blur-lg" : "text-shadow"}`}
      ref={menuRef}
    >
      <div className="mx-5 flex h-14 w-full max-w-5xl items-center justify-between">
        <h1 className="font-title z-50 text-xl font-semibold text-[#efb810]">
          Fenvi Art
        </h1>
        <div
          className="z-50 flex h-9 w-9 cursor-pointer flex-col items-center justify-center md:hidden"
          onClick={() => toggleMenu()}
        >
          <div
            className={`h-0.5 w-8 bg-[#efb810] duration-300 ${menuState ? "absolute rotate-45" : ""}`}
          ></div>
          <div
            className={`my-2.5 h-0.5 w-8 bg-[#efb810] ${menuState ? "hidden" : ""}`}
          ></div>
          <div
            className={`h-0.5 w-8 bg-[#efb810] duration-300 ${menuState ? "absolute -rotate-45" : ""}`}
          ></div>
        </div>
        <nav
          className={`absolute right-0 top-0 flex h-[calc(100vh)] w-[100%] items-center justify-center bg-zinc-900 pt-14 duration-300 ${menuState ? "translate-x-0" : "translate-x-[105%]"} max-w-full md:relative md:h-14 md:w-auto md:max-w-max md:translate-x-0 md:translate-y-0 md:bg-transparent md:py-0`}
        >
          <ul className="font-title flex flex-col items-center gap-6 text-center text-2xl font-thin text-white md:flex-row md:text-base">
            {["Inicio", "Esculturas", "Obras", "Deco"].map((item) => {
              return (
                <li
                  key={item}
                  className="navbar__link w-max hover:text-[#efb810]"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
