// Elementos del formulario de chat
  const chatForm = document.querySelector('.chat-input');
  const chatInput = document.querySelector('#user-input');
  const chatMessages = document.querySelector('#chat-messages');
  const sendButton = document.querySelector('#send-button');
  
  // Mostrar mensaje de bienvenida al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    appendMessage('bot', 'Hola, soy el asistente virtual del restaurante Dragón Dorado. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestros platos, horarios o hacer una reserva.');
  });
  
  // Función para enviar mensajes
  async function sendMessage(e) {
    if (e) e.preventDefault();
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Deshabilitar entrada durante el envío
    chatInput.disabled = true;
    sendButton.disabled = true;
    
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
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || errorData.error || `Error de servidor: ${response.status}`);
      }
      
      const data = await response.json();
      const botMessage = data.response;
      
      // Mostrar respuesta del bot
      appendMessage('bot', botMessage);
    } catch (error) {
      console.error('Error al conectar con la API:', error);
      appendMessage('bot', 'Lo siento, hubo un error al procesar tu mensaje. Por favor, verifica que el servidor esté en funcionamiento.');
    } finally {
      // Habilitar entrada después del envío (exitoso o no)
      chatInput.disabled = false;
      sendButton.disabled = false;
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
  
  // Eventos para enviar mensajes
  sendButton.addEventListener('click', sendMessage);
  
  // También permitir enviar con Enter
  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage(e);
    }
  });
