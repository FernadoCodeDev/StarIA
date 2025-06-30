import React from "react";
import Plus from "../../assets/svg/Plus";
import Web from "../../assets/svg/web";
import Idea from "../../assets/svg/idea";
import Investigation from "../../assets/svg/Investigation";
import Brush from "../../assets/svg/Brush";
import Tool from "../../assets/svg/Tool";
import Microphone from "../../assets/svg/Microphone";

const icons = () => {
  return (
    <div class="grid grid-cols-4 md:grid-cols-7 gap-4 items-center pt-16 text-black dark:text-white">
      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Plus class="w-6 h-6 m-auto"/>
        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 ml-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Cargar archivos
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Web class="w-6 h-6 m-auto"/>

        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Buscar en internet
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Idea class="w-6 h-6 m-auto"/>

        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Analizar antes de responder
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Investigation class="w-6 h-6 m-auto"/>

        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 -ml-12 md:-ml-0 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Investigar en profundidad
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Brush class="w-6 h-6 m-auto"/>

        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Visualizar idea
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Tool class="w-6 h-6 m-auto"/>

        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Herramientas
        </div>
      </div>

      <div class="relative group hover:cursor-pointer border-2 border-slate-300 p-2 rounded-full transition-all duration-500">
        <Microphone class="w-6 h-6 m-auto"/>

        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Dictar
        </div>
      </div>
    </div>
  );
};

export default icons;