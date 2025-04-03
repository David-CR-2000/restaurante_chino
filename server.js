require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = 3000;

// Configurar OpenAI para DeepSeek
const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY,
});

app.use(cors());
app.use(express.json());

// Endpoint del chat
app.post('/api/chat', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: "Eres un asistente del restaurante Dragón Dorado. Responde solo sobre comida china, menús, reservas y el restaurante. Si preguntan otra cosa, di que solo puedes responder sobre temas del restaurante." 
        },
        { role: "user", content: req.body.message }
      ],
      model: "deepseek-chat",
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});