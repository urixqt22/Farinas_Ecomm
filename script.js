// Function to add item to cart
function addToCart(event) {
    event.stopPropagation();
    let cartIcon = document.querySelector('.cart');
    let cartItemsCount = document.getElementById('cart-items');
    let currentCount = parseInt(cartItemsCount.innerText);
    currentCount++;
    cartItemsCount.innerText = currentCount;
    let productCard = event.currentTarget.closest('.product-card');
    let productName = productCard.querySelector('.product-name').innerText;
    let newItem = document.createElement('li');
    newItem.innerText = productName;
    let cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.appendChild(newItem);
    computeTotalPrice();
}

// Function to compute total price of items in the cart
function computeTotalPrice() {
    // Get all the prices of items in the cart
    let cartItems = document.querySelectorAll('.cart-items-list li');
    let totalPrice = 0;

    // Loop through each item in the cart and extract its price
    cartItems.forEach(item => {
        let itemName = item.innerText;
        let productCards = document.querySelectorAll('.product-card');

        // Find the corresponding product card for the item in the cart
        productCards.forEach(card => {
            let cardProductName = card.querySelector('.product-name').innerText;

            // If the product name in the card matches the item in the cart, add its price to the total
            if (cardProductName === itemName) {
                let productPrice = parseFloat(card.querySelector('.product-price').innerText.replace('php', '').replace(',', '').trim());
                totalPrice += productPrice;
            }
        });
    });

    // Display the total price in the cart dropdown
    let totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = 'Total Price: ' + totalPrice.toFixed(2) + 'php';
}

// Event listener for adding item to cart
let addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});
