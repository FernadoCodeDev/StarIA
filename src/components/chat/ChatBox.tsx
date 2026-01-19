import React, { useState } from "react";
import type { FormEvent } from "react";
import Icons from "../ui/Icons";
import Arrow from "../../assets/svg/Arrow";

interface ChatBoxProps {
  onSend: (Message: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ onSend }) => {
  const [Message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Message.trim() === "") return;
    onSend(Message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[80rem] text-zinc-950 bg-slate-100 dark:text-slate-100 rounded-2xl grid grid-cols-6 gap-4 w-full px-4 py-6 mb-4 border dark:bg-zinc-950 border-emerald-800 focus:outline-none focus:ring focus:ring-emerald-800"
    >
      <textarea
        value={Message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 col-span-5 p-2 border resize-none h-18 bg-slate-100 dark:bg-zinc-950"
        placeholder="Pregunta lo que quieras"
      ></textarea>

      <button
        type="submit"
        className="flex flex-row items-center justify-center w-full h-full p-2 rounded-2xl text-slate-100 bg-emerald-800"
      >
        <Arrow width="28" height="28" />
      </button>

      {/*
     Static function icons, they do nothing, discard them to avoid confusion
     
      <div className="w-full h-auto col-span-6 text-slate-100">
        <Icons />
      </div>
      */}
    </form>
  );
};

export default ChatBox;
