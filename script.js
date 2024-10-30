let contador = 0;
const carritoProductos = [];

// Añadir event listener a todos los botones "Agregar al Carrito"
const botonesAgregar = document.querySelectorAll('.btnbtn');

botonesAgregar.forEach((boton) => {
    boton.addEventListener('click', function() {
        const nombreProducto = this.getAttribute('data-nombre');
        const precioProducto = this.getAttribute('data-precio');
        const imagenProducto = this.getAttribute('data-imagen');

        // Añadir producto al carrito
        carritoProductos.push({ nombre: nombreProducto, precio: precioProducto, imagen: imagenProducto });
        contador++;
        document.getElementById('contador').textContent = contador;

        // Mostrar productos en el carrito
        mostrarCarrito();
    });
});

function mostrarCarrito() {
    const carritoDiv = document.querySelector('.productos-en-carrito');
    carritoDiv.innerHTML = ''; // Limpiar carrito antes de mostrar

    carritoProductos.forEach((producto) => {
        carritoDiv.innerHTML += `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: 50px;">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
            </div>`;
    });
}



let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const carouselInner = document.querySelector('.carousel-inner');
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

let total = 0;

        function addToCart(price, product) {
            total += price;

            const cartItems = document.getElementById('cart-items');
            const listItem = document.createElement('li');
            listItem.textContent = `${product} - $${price}`;
            cartItems.appendChild(listItem);

            document.getElementById('total-price').textContent = `Total: $${total}`;
} 

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('show');
}

function desplazar(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}