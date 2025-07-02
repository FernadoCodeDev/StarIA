import React, { useState } from "react";
import DarkMode from "../components/ui/DarkMode";
import DropDown from "../components/ui/DropDown";

const Header = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between w-full h-20 gap-4 p-4 text-black bg-white dark:bg-neutral-800 align-center dark:text-white">
        <div className="">
          <h1 className="text-xl font-bold md:text-3xl">Prisma</h1>
        </div>

      

        <div className="flex flex-row gap-4">
          <DropDown />

          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Header;
