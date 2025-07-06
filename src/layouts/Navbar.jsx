import React, { useState } from "react";
import BoxOuterLightUp from "../assets/svg/BoxOuterLightUp";
import Pencil from "../assets/svg/Pencil";
import DarkMode from "../components/ui/DarkMode";

const NawBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className="absolute flex flex-col gap-4 top-16 left-2 md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 mx-auto text-black transition-all duration-700 ease-out bg-transparent dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700"
        >
          <BoxOuterLightUp width="20" height="20" className="mx-auto " />
        </button>

        <button className="p-2 mx-auto text-black transition-all duration-700 ease-out bg-transparent dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700">
          <Pencil width="20" height="20" className="mx-auto " />
        </button>
      </div>

      <div className="flex-col hidden w-20 h-full gap-4 text-black bg-white border-r-2 md:flex align-center border-neutral-700 dark:bg-neutral-800 dark:text-white">
        <img
          src="/img/Logo.webp"
          alt="Logo"
          className="w-20 h-auto p-2 invert dark:invert-0"
        />

        <button
          onClick={toggleMenu}
          className="p-2 mx-auto text-black transition-all duration-700 ease-out bg-transparent dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700"
        >
          <BoxOuterLightUp width="20" height="20" className="mx-auto " />
        </button>

        <button className="p-2 mx-auto text-black transition-all duration-700 ease-out bg-transparent dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700">
          <Pencil width="20" height="20" className="mx-auto " />
        </button>
      </div>

      <div
        className={`fixed text-white top-0 left-0 w-full p-2 md:max-w-40 h-full bg-slate-200 dark:bg-neutral-900  transition-transform duration-700 ease-in-out transform z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between p-2">
          <img
            src="/img/Logo.webp"
            alt="Logo"
            className="w-20 h-auto p-2 invert dark:invert-0"
          />

          <button
            onClick={toggleMenu}
            className="p-2 text-white rounded-md dark:text-black dark:bg-white bg-neutral-800 h-1/2"
          >
            <BoxOuterLightUp width="12" height="12" />
          </button>
        </div>

        <h1 className="p-2 font-bold text-black dark:text-white">Chats</h1>

        <div className="p-2 text-black dark:text-white bg-slate-400 dark:bg-neutral-700">
          Nuevo Chat
        </div>
        <div className="p-2 text-black transition-all duration-700 ease-out bg-transparent rounded dark:text-white hover:bg-slate-300 dark:hover:bg-neutral-800">
          Nuevo Chat
        </div>
      </div>
    </div>
  );
};

export default NawBar;
