// carrito.js

let carrito = [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    mostrarCarrito();
}

function mostrarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });

    calcularTotal();
}

function calcularTotal() {
    let total = carrito.reduce((sum, item) => sum + item.precio, 0);
    document.getElementById('total').textContent = `Total: $${total}`;
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    let resumen = carrito.map(item => `${item.producto} - $${item.precio}`).join('\n');
    alert(`Gracias por tu compra!\n\nResumen:\n${resumen}\n\nTotal: ${document.getElementById('total').textContent}`);
    carrito = [];
    mostrarCarrito();
}
