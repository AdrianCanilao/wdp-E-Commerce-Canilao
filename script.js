let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCartCount();
    alert(`${product} has been added to your cart.`);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function showCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartTotalItems = document.getElementById('cart-total-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = total.toFixed(2); // Format total to 2 decimal places
    cartTotalItems.innerText = cart.length;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    alert('Thank you for your purchase!');
    cart = [];
    updateCartCount();
    showCart();

    // Show the registration form
    document.getElementById('registration-form').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    document.getElementById('registration').addEventListener('submit', handleRegistration);
});

function loadProducts() {
    const products = getProductList();
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

function getProductList() {
    return [
        { name: 'Fridge', price: 500, image: 'images/fridge.jpg' },
        { name: 'Oven', price: 300, image: 'images/oven.jpg' },
        { name: 'Washing Machine', price: 700, image: 'images/washing.jpg' },
        { name: 'Blender', price: 200, image: 'images/blender.jpg' },
        { name: 'Air Fryer', price: 700, image: 'images/airfryer.jpg' },
        { name: 'Television', price: 2500, image: 'images/tv.jpg' },
        { name: 'JBL Bluetooth Speaker', price: 350, image: 'images/speaker.jpg' },
        { name: 'LG Split Type Aircon', price: 1150, image: 'images/ac.jpg' },
        { name: 'Dryer', price: 1150, image: 'images/dryer.jpg' }
    ];
}

function getProductDetails(productName) {
    const products = getProductList();
    return products.find(product => product.name === productName);
}

function handleRegistration(event) {
    event.preventDefault();
    alert('Registration successful!');
    document.getElementById('registration-form').reset();
    document.getElementById('registration-form').style.display = 'none';
}
