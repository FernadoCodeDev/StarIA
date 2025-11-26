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
    <div className="grid items-center grid-cols-4 gap-4 pt-16 text-black md:grid-cols-7 dark:text-white">
      <div className="relative p-2 transition-all duration-500 border-2 rounded-full group hover:cursor-pointer border-slate-300">
        <Plus className="w-6 h-6 m-auto"/>
        <div className="absolute px-2 py-1 mb-4 ml-4 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 bg-black rounded-md opacity-0 bottom-full left-1/2 w-max group-hover:opacity-100 group-hover:scale-100">
          Cargar archivos
        </div>
      </div>

      <div className="relative p-2 transition-all duration-500 border-2 rounded-full group hover:cursor-pointer border-slate-300">
        <Web className="w-6 h-6 m-auto"/>

        <div className="absolute px-2 py-1 mb-4 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 bg-black rounded-md opacity-0 bottom-full left-1/2 w-max group-hover:opacity-100 group-hover:scale-100">
          Buscar en internet
        </div>
      </div>

      <div className="relative p-2 transition-all duration-500 border-2 rounded-full group hover:cursor-pointer border-slate-300">
        <Idea className="w-6 h-6 m-auto"/>

        <div className="absolute px-2 py-1 mb-4 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 bg-black rounded-md opacity-0 bottom-full left-1/2 w-max group-hover:opacity-100 group-hover:scale-100">
          Analizar antes de responder
        </div>
      </div>

      <div className="relative p-2 transition-all duration-500 border-2 rounded-full group hover:cursor-pointer border-slate-300">
        <Investigation className="w-6 h-6 m-auto"/>

        <div className="absolute px-2 py-1 mb-4 -ml-12 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 bg-black rounded-md opacity-0 bottom-full left-1/2 md:-ml-0 w-max group-hover:opacity-100 group-hover:scale-100">
          Investigar en profundidad
        </div>
      </div>

      <div className="relative p-2 transition-all duration-500 border-2 rounded-full group hover:cursor-pointer border-slate-300">
        <Brush className="w-6 h-6 m-auto"/>

        <div className="absolute px-2 py-1 mb-4 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 bg-black rounded-md opacity-0 bottom-full left-1/2 w-max group-hover:opacity-100 group-hover:scale-100">
          Visualizar idea
        </div>
      </div>

      <div className="relative p-2 transition-all duration-500 border-2 rounded-full group hover:cursor-pointer border-slate-300">
        <Tool className="w-6 h-6 m-auto"/>

        <div className="absolute px-2 py-1 mb-4 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 bg-black rounded-md opacity-0 bottom-full left-1/2 w-max group-hover:opacity-100 group-hover:scale-100">
          Herramientas
        </div>
      </div>

      <div className="relative p-2 transition-all duration-500 border-2 rounded-full group hover:cursor-pointer border-slate-300">
        <Microphone className="w-6 h-6 m-auto"/>

        <div className="absolute px-2 py-1 mb-4 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 bg-black rounded-md opacity-0 bottom-full left-1/2 w-max group-hover:opacity-100 group-hover:scale-100">
          Dictar
        </div>
      </div>
    </div>
  );
};

export default icons;