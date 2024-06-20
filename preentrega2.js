
class Menu {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const menus = [
    new Menu(1, 'Menú Vegetariano', 2500),
    new Menu(2, 'Menú de Pollo', 2890),
    new Menu(3, 'Menú de Pescado', 3150),
    new Menu(4, 'Menú de Carne', 3330)
];


let carrito = [];

// Función para mostrar menús y carrito
function display() {
    // Mostrar menús
    document.getElementById('menus-container').innerHTML = menus.map(menu => `
        <div class="menu">
            <span>${menu.nombre} - $${menu.precio}</span>
            <button onclick="addToCart(${menu.id})">Añadir al carrito</button>
        </div>
    `).join('');

    // Mostrar carrito
    document.getElementById('cart-container').innerHTML = carrito.map((menu, index) => `
        <div class="cart-item">
            <span>${menu.nombre} - $${menu.precio}</span>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        </div>
    `).join('');
}

// Añadir un menú al carrito
function addToCart(menuId) {
    const menu = menus.find(m => m.id === menuId);
    carrito.push(menu);
    display();
}

// Eliminar un menú del carrito
function removeFromCart(index) {
    carrito.splice(index, 1);
    display();
}

// Finalizar la compra
function finalizePurchase() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
    } else {
        const total = carrito.reduce((sum, menu) => sum + menu.precio, 0);
        alert(`Compra finalizada. Total: $${total}`);
        carrito = [];
        display();
    }
}

// Inicializar la vista
display();