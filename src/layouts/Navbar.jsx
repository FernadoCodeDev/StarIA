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
      <div className="flex flex-col w-20 h-full gap-4 text-black align-center bg-neutral-900 dark:text-white">
        <img
          src="/img/Logo.webp"
          alt="Logo"
          className="w-20 h-auto p-2 invert-0 dark:invert"
        />

        <button onClick={toggleMenu} className="p-2 mx-auto text-white transition-all duration-700 ease-out bg-transparent hover:bg-neutral-700">
          <BoxOuterLightUp width="20" height="20" className="mx-auto " />
        </button>

        <button className="p-2 mx-auto text-white transition-all duration-700 ease-out bg-transparent hover:bg-neutral-700">
          <Pencil width="20" height="20" className="mx-auto " />
        </button>
      </div>

      <div
        className={`fixed text-white top-0 left-0 w-full p-2 md:max-w-40 h-full bg-neutral-900 transition-transform duration-700 ease-in-out transform z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between p-2">
          <img
            src="/img/Logo.webp"
            alt="Logo"
            className="w-20 h-auto p-2 invert-0 dark:invert"
          />

          <button
            onClick={toggleMenu}
            className="p-2 text-black bg-white rounded-md h-1/2"
          >
            <BoxOuterLightUp width="12" height="12" />
          </button>
        </div>

        <h1 className="p-2 font-bold text-black dark:text-white">Chats</h1>

        <div className="p-2 bg-neutral-700">Nuevo Chat</div>
        <div className="p-2 transition-all duration-700 ease-out bg-transparent rounded hover:bg-neutral-800">Nuevo Chat</div>

      </div>
    </div>
  );
};

export default NawBar;
