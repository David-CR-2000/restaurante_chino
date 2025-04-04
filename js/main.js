// Menú hamburguesa
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Generar menú completo
const dishes = [
    {
        name: 'Pato Laqueado',
        img: 'pato.jpg',
        price: '18.50€',
        desc: 'Pato crujiente con salsa hoisin',
        ingredients: 'Pato, salsa hoisin, miel, especias chinas'
    },
    {
        name: 'Dim Sum',
        img: 'dimsum.jpg',
        price: '12.90€',
        desc: 'Selección de dim sum tradicionales',
        ingredients: 'Cerdo, gambas, setas shiitake, masa de harina'
    },
    {
        name: 'Wok de Verduras',
        img: 'wok.jpg',
        price: '10.50€',
        desc: 'Verduras frescas salteadas al wok',
        ingredients: 'Brócoli, zanahoria, pimiento, cebolla, salsa de soja'
    },
    {
        name: 'Cerdo Agridulce',
        img: 'cerdo.jpg',
        price: '14.90€',
        desc: 'Cerdo crujiente con salsa agridulce',
        ingredients: 'Cerdo, piña, pimiento, salsa agridulce'
    },
    {
        name: 'Ternera con Jengibre',
        img: 'ternera.jpg',
        price: '16.50€',
        desc: 'Ternera tierna con jengibre y cebollino',
        ingredients: 'Ternera, jengibre, cebollino, salsa de ostras'
    },
    {
        name: 'Arroz Tres Delicias',
        img: 'arroz.jpg',
        price: '9.90€',
        desc: 'Arroz frito con jamón, gambas y guisantes',
        ingredients: 'Arroz, jamón, gambas, guisantes, huevo'
    }
];

const menuGrid = document.querySelector('.menu-grid');
dishes.forEach(dish => {
    const dishCard = document.createElement('div');
    dishCard.className = 'dish-card';
    dishCard.innerHTML = `
        <img src="assets/images/${dish.img}" alt="${dish.name}">
        <h3>${dish.name}</h3>
        <p class="price">${dish.price}</p>
        <p class="desc">${dish.desc}</p>
        <div class="ingredients">
            <h4>Ingredientes:</h4>
            <p>${dish.ingredients}</p>
        </div>
    `;
    menuGrid.appendChild(dishCard);
});

// Chat IA
const chatContainer = document.querySelector('.chat-container');
document.querySelector('.chat-header').addEventListener('click', () => {
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
});