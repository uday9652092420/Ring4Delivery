// Cart Management Functions

// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Clear cart
function clearCart() {
    localStorage.removeItem('cart');
}

// Add item to cart
function addToCart(item, quantity, specialInstructions, restaurantId) {
    let cart = getCart();

    // Check if item already exists in cart from same restaurant
    const existingItem = cart.find(c => c.itemId === item.id && c.restaurantId === restaurantId);

    if (existingItem) {
        existingItem.quantity += quantity;
        if (specialInstructions) {
            existingItem.specialInstructions = specialInstructions;
        }
    } else {
        // If adding from different restaurant, clear cart first
        if (cart.length > 0 && cart[0].restaurantId !== restaurantId) {
            const confirm = window.confirm('You have items from a different restaurant. Replace cart?');
            if (!confirm) return;
            cart = [];
        }

        const cartItem = {
            itemId: item.id,
            quantity: quantity,
            specialInstructions: specialInstructions,
            restaurantId: restaurantId
        };
        cart.push(cartItem);
    }

    saveCart(cart);
    showNotification('Item added to cart!');
}

// Update cart count in navbar
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountBadges = document.querySelectorAll('#cart-count');
    cartCountBadges.forEach(badge => {
        badge.textContent = count;
    });
}

// Show notification
function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed bottom-0 end-0 m-3';
    notification.style.zIndex = '9999';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Get menu item by ID
function getMenuItemById(itemId) {
    return menus.find(m => m.id === itemId);
}

// Initialize on every page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});
