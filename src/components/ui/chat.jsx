import React, { useState } from "react";

const chat = () => {
  return (
    <div className="flex flex-col w-full gap-4 p-4">
      <div className="flex justify-start">
        <div className="p-3 bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl max-w-[70%]">
          Lorem ipsum dolor sit amet consectetur,
        </div>
      </div>

      <div className="flex justify-end">
        <div className="p-3 bg-emerald-100 dark:bg-emerald-700 text-black dark:text-white rounded-xl max-w-[70%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          culpa possimus architecto velit illum. Omnis vitae cum dolore sit
          consectetur, expedita dicta rem porro facilis nostrum maxime quidem
          alias impedit.
        </div>
      </div>

      <div className="flex justify-start">
        <div className="p-3 bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl max-w-[70%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          culpa possimus architecto velit illum. Omnis vitae cum dolore sit
          consectetur, expedita dicta rem porro facilis nostrum maxime quidem
          alias impedit.
        </div>
      </div>
    </div>
  );
};

export default chat;
