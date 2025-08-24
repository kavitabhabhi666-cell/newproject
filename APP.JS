// Placeholder products (replace with WooCommerce REST API fetch)
const products = [
    {id:1, name:"Classic Makhana", price:1000, image:"images/classic.jpg"},
    {id:2, name:"Chocolate Makhana", price:2000, image:"images/chocolate.jpg"},
    {id:3, name:"Spicy Makhana", price:1500, image:"images/spicy.jpg"},
];

const productsContainer = document.getElementById("products-container");
const cartItemsContainer = document.getElementById("cart-items");
let cart = [];

// Load products
products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="150">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(div);
});

// Add to cart function
function addToCart(productId){
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

// Render cart items
function renderCart(){
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.name} - ₹${item.price}`;
        cartItemsContainer.appendChild(div);
        total += item.price;
    });
    document.getElementById("cart-total").textContent = `Total: ₹${total}`;
}

// Checkout form placeholder
document.getElementById("checkout-form").addEventListener("submit", function(e){
    e.preventDefault();
    var options = {
    "key": "rzp_test_R8ttUEshyH0mc6", // Your Test Key ID here
    "amount": 10000, // Example: ₹100. Amount is in paise (10000 paise = ₹100)
    "currency": "INR",
    "name": "Madhur Mithila",
    "description": "Makhana Purchase",
    "handler": function (response){
        alert("Payment Successful! ID: " + response.razorpay_payment_id);
    },
    "theme": {
        "color": "#ff6600"
    }
};
var rzp1 = new Razorpay(options);

document.getElementById('checkout-form').addEventListener("submit", function(e){
    e.preventDefault();
    rzp1.open();
});

    
});
