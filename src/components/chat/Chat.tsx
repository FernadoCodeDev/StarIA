import React, { useState } from 'react';
import ChatBox from './ChatBox';
import { sendGroqMessage } from '../../utils/openai';

interface message {
  texto: string;
  autor: 'user' | 'bot';
}

const Chat: React.FC = () => {
  const [messages, setmessages] = useState<message[]>([]);

  const handleShipping = async (Usermessage: string) => {
    const newMessage: message = { texto: Usermessage, autor: 'user' };
    setmessages((prev) => [...prev, newMessage]);

    const respuestaBot = await sendGroqMessage(Usermessage);
    setmessages((prev) => [...prev, { texto: respuestaBot, autor: 'bot' }]);
  };

  return (
    <div className="w-full max-w-4xl p-4 mx-auto">
      <div className="flex flex-col w-full gap-4 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.autor === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`p-3  max-w-[70%] ${
                msg.autor === 'user'
                  ? 'bg-emerald-100 rounded-xl dark:bg-emerald-700 text-zinc-950 dark:text-slate-100'
                  : 'text-zinc-950 dark:text-slate-100 border-b-2 border-slate-200 dark:border-zinc-900'
              }`}
            >
              {msg.texto}
            </div>
          </div>
        ))}
      </div>

      <ChatBox onSend={handleShipping} />
    </div>
  );
};

export default Chat;
