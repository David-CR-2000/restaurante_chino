# Restaurante Dragón Dorado 🐉

Sitio web para el restaurante chino Dragón Dorado con funcionalidad de chat IA integrada usando la API de DeepSeek.

## Estructura del Proyecto

- `index.html`: Página principal del restaurante
- `carta.html`: Carta completa de platos
- `menu.html`: Menús especiales
- `contact.html`: Formulario de contacto
- `reservations.html`: Sistema de reservas
- `chat.html`: Chat con IA para consultas
- `server.js`: Servidor Node.js para la API de DeepSeek
- `css/style.css`: Estilos del sitio
- `js/`: Scripts JavaScript
  - `main.js`: Funcionalidades generales
  - `chat.js`: Lógica del chat con IA

## Requisitos

- Node.js (v14 o superior)
- Cuenta en DeepSeek para obtener una API key

## Instalación

1. Clona este repositorio
2. Instala las dependencias:

```bash
npm install
```

3. Configura tu API key de DeepSeek:
   - Edita el archivo `.env` y reemplaza `tu_clave_api_aqui` con tu clave API real de DeepSeek

## Ejecución

1. Inicia el servidor:

```bash
npm start
```

2. Abre el sitio web en tu navegador (los archivos HTML se pueden abrir directamente)
3. Para usar el chat con IA, asegúrate de que el servidor esté en ejecución

## Funcionalidades

- Diseño responsive adaptado a dispositivos móviles y escritorio
- Menú interactivo con información detallada de platos
- Sistema de reservas online
- Formulario de contacto
- Chat con IA integrado usando la API de DeepSeek

## Tecnologías utilizadas

- HTML5, CSS3, JavaScript
- Node.js con Express para el backend
- API de DeepSeek para el chat con IA
- Fuentes personalizadas chinas (Ma Shan Zheng)
- Font Awesome para iconos

## Notas importantes

- El chat con IA requiere una conexión activa a internet y una API key válida de DeepSeek
- Los formularios de contacto y reservas son solo demostrativos y no procesan datos reales