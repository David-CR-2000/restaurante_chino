require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 3000;

// Configurar OpenAI para DeepSeek
const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY,
});

// Verificar si la API key está configurada
if (!process.env.DEEPSEEK_API_KEY) {
  console.warn('⚠️ ADVERTENCIA: No se ha configurado DEEPSEEK_API_KEY en el archivo .env');
  console.warn('El chat no funcionará correctamente hasta que configures tu API key');
}

app.use(cors());
app.use(express.json());

// Endpoint del chat
app.post('/api/chat', async (req, res) => {
  // Verificar que se haya enviado un mensaje
  if (!req.body.message) {
    return res.status(400).json({ error: "No se proporcionó ningún mensaje" });
  }

  try {
    // Llamada a la API de DeepSeek
    const completion = await openai.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: "Eres un asistente del restaurante Dragón Dorado. Responde solo sobre comida china, menús, reservas y el restaurante. Si preguntan otra cosa, di que solo puedes responder sobre temas del restaurante." 
        },
        { role: "user", content: req.body.message }
      ],
      model: "deepseek-chat",
      temperature: 0.7, // Añadimos temperatura para controlar la creatividad de las respuestas
      max_tokens: 500, // Limitamos la longitud de las respuestas
    });

    // Enviar respuesta al cliente
    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error en la API de DeepSeek:', error);
    
    // Proporcionar mensajes de error más específicos
    if (error.response) {
      // Error de la API de DeepSeek
      res.status(error.response.status || 500).json({ 
        error: "Error en la API de DeepSeek", 
        details: error.response.data || error.message 
      });
    } else if (error.request) {
      // No se recibió respuesta
      res.status(503).json({ 
        error: "No se pudo conectar con la API de DeepSeek", 
        details: "Verifica tu conexión a internet y la configuración de la API" 
      });
    } else {
      // Error general
      res.status(500).json({ 
        error: "Error al procesar la solicitud", 
        details: error.message 
      });
    }
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});