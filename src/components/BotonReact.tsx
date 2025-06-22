import { useState } from "react";

export default function BotonReact() {
  const [contador, setContador] = useState(0);
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded"
      onClick={() => setContador(contador + 1)}
    >
      Contador: {contador}
    </button>
  );
}
