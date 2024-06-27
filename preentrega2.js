class Menu {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const menus = [
    new Menu(1, 'Menú Vegetariano', 10),
    new Menu(2, 'Menú de Pollo', 12),
    new Menu(3, 'Menú de Pescado', 15),
    new Menu(4, 'Menú de Carne', 18)
];

let cart = [];

function display() {
    document.getElementById('menus-container').innerHTML = menus.map(menu => `
        <div class="menu">
            <span>${menu.nombre} - $${menu.precio}</span>
            <button onclick="addToCart(${menu.id})">Añadir al carrito</button>
        </div>
    `).join('');

    document.getElementById('cart-container').innerHTML = cart.map((menu, index) => `
        <div class="cart-item">
            <span>${menu.nombre} - $${menu.precio}</span>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        </div>
    `).join('');
}

function addToCart(menuId) {
    const menu = menus.find(m => m.id === menuId);
    cart.push(menu);
    display();
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        display();
    } else {
        alert('Índice inválido');
    }
}

function finalizePurchase() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
    } else {
        const total = cart.reduce((sum, menu) => sum + menu.precio, 0);
        alert(`Compra finalizada. Total: $${total}`);
        cart = [];
        display();
    }
}

display();

function simulateAddToCart() {
    let added = false;
    do {
        const menuId = parseInt(prompt("Ingrese el ID del menú para añadir al carrito (1-4):"));
        if (menus.some(menu => menu.id === menuId)) {
            addToCart(menuId);
            alert("Menú añadido al carrito.");
            added = true;
        } else {
            alert("ID inválido. Inténtelo de nuevo.");
        }
    } while (!added);
}

simulateAddToCart();