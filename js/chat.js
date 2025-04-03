// Elementos del formulario de chat
  const chatForm = document.querySelector('.chat-form');
  const chatInput = document.querySelector('.chat-input');
  const chatMessages = document.querySelector('.chat-messages');
  
  // Función para enviar mensajes
  async function sendMessage(e) {
    e.preventDefault();
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Mostrar mensaje del usuario
    appendMessage('user', message);
    chatInput.value = '';
    
    try {
      // Llamada a nuestro backend
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message
        })
      });
      
      const data = await response.json();
      const botMessage = data.response;
      
      // Mostrar respuesta del bot
      appendMessage('bot', botMessage);
    } catch (error) {
      console.error('Error al conectar con la API:', error);
      appendMessage('bot', 'Lo siento, hubo un error al procesar tu mensaje.');
    }
  }
  
  // Función para añadir mensajes al chat
  function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // Evento para enviar mensajes
  chatForm.addEventListener('submit', sendMessage);
