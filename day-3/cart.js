// Array to hold cart items
let cart = [];

// Function to add an item to the cart
function addToCart(item) {
    cart.push(item);
    console.log(`${item.name} has been added to the cart.`);
}

// Function to remove an item from the cart by its name
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    console.log(`${itemName} has been removed from the cart.`);
}

// Function to display the cart contents
function displayCart() {
    console.log("Shopping Cart:");
    cart.forEach(item => {
        console.log(`- ${item.name}: $${item.price}`);
    });
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Total: $${total}`);
}

// Example usage
addToCart({ name: "Laptop", price: 999.99 });
addToCart({ name: "Mouse", price: 19.99 });
displayCart();
calculateTotal();
removeFromCart("Mouse");
displayCart();
calculateTotal();