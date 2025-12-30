const API_KEY = import.meta.env.PUBLIC_GROQ_API_KEY;

export const sendGroqMessage = async (message: string): Promise<string> => {
  try {
    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b',
          messages: [
            { role: 'system', content: 'Eres un asistente conversacional.' },
            { role: 'user', content: message }
          ],
          temperature: 0.7
        })
      }
    );

    const data = await response.json();
    return data.choices?.[0]?.message?.content?.trim() ?? 'Sin respuesta';
  } catch (error) {
    console.error('Error con Groq:', error);
    return 'Error al conectar con el modelo.';
  }
};
