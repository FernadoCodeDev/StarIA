import React, { useState } from "react";
import DarkMode from "../components/ui/DarkMode";

const Header = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between w-full h-20 gap-4 p-4 text-black bg-white dark:bg-neutral-800 align-center dark:text-white">
        <div className="">
          <h1 className="text-xl font-bold md:text-3xl">Prisma</h1>
        </div>

        <div className="hidden md:block">
          <h1 className="text-xl font-bold">Memoria Libre </h1>
        </div>

        <div className="flex flex-row gap-4">
          <select name="..." className="text-black bg-white dark:bg-neutral-800 dark:text-white">
            <option value="" disabled selected> ... </option>
            <option value="">Archivar</option>
            <option value="">Eliminar</option>
          </select>

          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Header;
