
import React, { useState } from 'react'; 
import type { FormEvent } from 'react';
import Icons from '../ui/Icons';
import Arrow from '../../assets/svg/Arrow';

interface ChatBoxProps {
  onSend: (Message: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ onSend }) => {
  const [Message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Message.trim() === '') return;
    onSend(Message);
    setMessage('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[80rem] text-black bg-slate-50 dark:text-white rounded-2xl grid grid-cols-6 gap-4 w-full p-2 mb-4 border dark:bg-neutral-800 border-emerald-800 focus:outline-none focus:ring focus:ring-emerald-800"
    >
      <textarea
        value={Message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 col-span-5 p-2 bg-white border dark:bg-neutral-700 min-h-8 max-h-28"
        placeholder="Pregunta lo que quieras"
      ></textarea>

      <button
        type="submit"
        className="flex flex-row items-center justify-center w-full h-full p-2 text-white bg-emerald-800"
      >
        <Arrow width="16" height="16" />
      </button>

      <div className="w-full h-auto col-span-6 text-white">
        <Icons />
      </div>
    </form>
  );
};

export default ChatBox;
