import React, { useState } from "react";
import Delete from "../../assets/svg/Delete";
import File from "../../assets/svg/File";

const ChatActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 text-black bg-white border rounded-md dark:bg-neutral-800 dark:text-white"
      >
        Acciones ▾
      </button>

      {open && (
        <ul className="absolute z-10 w-40 mt-2 bg-white border rounded shadow-lg dark:bg-neutral-800">
          <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-100 hover:text-blue-600">
            <File className="w-4 h-4 text-blue-600" /> Archivar
          </li>
          <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-red-100 hover:text-red-600">
            <Delete className="w-4 h-4 text-red-600" /> Eliminar
          </li> 
        </ul>
      )}
    </div>
  );
};


export default ChatActions;