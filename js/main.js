// Menú hamburguesa
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Generar platos destacados
const dishes = [
    { name: 'Pato Laqueado', img: 'pato.jpg', desc: 'Pato crujiente con salsa hoisin' },
    { name: 'Dim Sum', img: 'dimsum.jpg', desc: 'Selección de dim sum tradicionales' },
    { name: 'Wok de Verduras', img: 'wok.jpg', desc: 'Verduras frescas salteadas al wok' }
];

const dishGrid = document.querySelector('.dish-grid');
dishes.forEach(dish => {
    const dishCard = document.createElement('div');
    dishCard.className = 'dish-card';
    dishCard.innerHTML = `
        <img src="assets/images/${dish.img}" alt="${dish.name}">
        <h3>${dish.name}</h3>
        <p>${dish.desc}</p>
        <a href="dish-template.html?dish=${encodeURIComponent(dish.name)}">Ver Detalles</a>
    `;
    dishGrid.appendChild(dishCard);
});

// Chat IA
const chatContainer = document.querySelector('.chat-container');
document.querySelector('.chat-header').addEventListener('click', () => {
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
});