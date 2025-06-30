import React from "react";
import Logo from "../assets/img/Logo.webp";
import DarkMode from "../components/ui/DarkMode";

const Header = () => {
  return (
    <div class="relative w-full h-auto text-black bg-white dark:bg-neutral-900 dark:text-white ">
      <div class="grid items-center h-auto grid-cols-2 gap-2 p-4 m-auto ">
        <img
          src={Logo}
          alt="Logo"
          class="w-full h-auto m-auto md:max-w-40"
        />

        <div class="m-auto">
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Header;