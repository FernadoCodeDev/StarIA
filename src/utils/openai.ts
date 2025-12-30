const API_KEY = import.meta.env.GROQ_API_KEY;

export const sendGroqMessage = async (message: string): Promise<string> => {
  try {
    const response = await fetch('/.netlify/functions/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    return data.reply ?? 'Sin respuesta';
  } catch {
    return 'Error al conectar con el servidor.';
  }
};

