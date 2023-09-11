   export async function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Loading menu...</h2>';

    try {
        const response = await fetch('http://localhost:5000/api/menu');
        const menuData = await response.json();
         localStorage.setItem('menuData', JSON.stringify(menuData));
        if (response.ok) {
            // Render the menu items
            const menuItems = menuData.map(item => `
                <div class="menu-item">
                    <img src="${item.picture}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <button class="add-to-cart" data-id="${item._id}">Add to Cart</button>
                </div>
            `).join('');

            content.innerHTML = `<h2>Menu</h2><div class="menu">${menuItems}</div>`;

            // Add event listeners to "Add to Cart" buttons
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const itemId = event.target.getAttribute('data-id');
                    addToCart(itemId);
                });
            });
        } else {
            // Handle error response
            content.innerHTML = '<h2>Error loading menu</h2>';
        }
    } catch (error) {
        console.error('Error loading menu:', error);
        content.innerHTML = '<h2>Error loading menu</h2>';
    }
}


// Initialize an empty cart array to hold cart items

// Function to add an item to the cart
function addToCart(itemId) {
    // Check if 'cart' exists in local storage
    if (localStorage.getItem('cart')) {
        // Parse the 'cart' data from local storage
        const cart = JSON.parse(localStorage.getItem('cart'));

        // Fetch the menu item from the menuData based on itemId
        const menuData = JSON.parse(localStorage.getItem('menuData'));
        const menuItem = menuData.find(item => item._id === itemId);

        if (menuItem) {
            // Check if the item is already in the cart
            const existingCartItem = cart.find(item => item.id === itemId);

            if (existingCartItem) {
                // If the item is already in the cart, increase its quantity
                existingCartItem.quantity += 1;
            } else {
                // If the item is not in the cart, add it with a quantity of 1
                const cartItem = {
                    id: itemId,
                    name: menuItem.name,
                    price: menuItem.price,
                    quantity: 1, // Initialize quantity to 1
                };
                cart.push(cartItem);
                console.log(cart);

                // Update the 'cart' data in local storage
                localStorage.setItem('cart', JSON.stringify(cart));
            }

            // Optionally, you can update the cart UI here to reflect the changes
        }
    } else {
        // 'cart' does not exist in local storage, create and initialize it
        const cart = [];

        // Fetch the menu item from the menuData based on itemId
        const menuData = JSON.parse(localStorage.getItem('menuData'));
        const menuItem = menuData.find(item => item._id === itemId);

        if (menuItem) {
            // Add the item to the cart with a quantity of 1
            const cartItem = {
                id: itemId,
                name: menuItem.name,
                price: menuItem.price,
                quantity: 1, // Initialize quantity to 1
            };
            cart.push(cartItem);
            console.log(cart);

            // Update the 'cart' data in local storage
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
}