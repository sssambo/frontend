import { openMap } from './mapapi.js';
export function all(){
    // Create a button element
const checkoutButton = document.createElement('button');
    const cartItemsContainer = document.getElementById('content');
    // Access the 'cart' data from local storage
    const cart = getCartFromLocalStorage();

// Function to get the cart data from local storage
function getCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
     if (cartData) {return  JSON.parse(cartData)}else{ return [];}
}

// Function to render cart items
function renderCartItems(cart) {
    
    
    const cartTotalContainer = document.getElementById('cart-total');

    // Clear previous items
    cartItemsContainer.innerHTML = '';
   // cartTotalContainer.innerHTML = ''; 
    let totalCost = 0; // Initialize total cost


    // Loop through the cart array and render each item
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        
        // Create elements for item details
        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `Price: $${item.price}`;

        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `Quantity: ${item.quantity}`;

        const itemQuantitytotal = document.createElement('div');
        const itemtotal = item.quantity * item.price
        itemQuantitytotal.textContent = `Total: $${itemtotal}`; 


        // Create a remove button for each item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-from-cart');
        removeButton.setAttribute('data-id', item.id);

        // Add event listener to remove the item when the button is clicked
        removeButton.addEventListener('click', (event) => {
            const itemId = event.target.getAttribute('data-id');
            removeFromCart(itemId);
        });
        
        // Create buttons for increasing and decreasing quantity
        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.addEventListener('click', () => increaseQuantity(item));

        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.addEventListener('click', () => decreaseQuantity(item));

        // // Create a div for the total cost of the item 


        // Append elements to the cart item div
        cartItemDiv.appendChild(itemName);
        cartItemDiv.appendChild(itemPrice);
        cartItemDiv.appendChild(decreaseButton);
        cartItemDiv.appendChild(itemQuantity);
        cartItemDiv.appendChild(increaseButton);
        cartItemDiv.appendChild(removeButton);
        cartItemDiv.appendChild(itemQuantitytotal);
       
        // Append the cart item div to the container
        cartItemsContainer.appendChild(cartItemDiv);
         totalCost += itemtotal;

    });
    // Create a div for the total cost of all items
    const totalCostDiv = document.createElement('div');
    totalCostDiv.textContent = `Total Cost for All Items: $${totalCost}`;
    cartItemsContainer.appendChild(totalCostDiv);

     // Create a button for opening the map
     const openMapButton = document.createElement('button');
     openMapButton.textContent = 'Select Delivery Location';
     openMapButton.addEventListener('click', openMap);
 
     // Append the button to the cart items container
     cartItemsContainer.appendChild(openMapButton);
//     // Create a button element
// const checkoutButton = document.createElement('button');
checkoutButton.id = 'checkout-btn';
checkoutButton.textContent = 'Checkout';
   
// Append the button to the cartItemsContainer
cartItemsContainer.appendChild(checkoutButton);
}

checkoutButton.addEventListener('click', async () => {
    // Your checkout logic here
        // Check if there is a session in local storage
        const sessionData = localStorage.getItem('session');
        // Fetch cart data from local storage
        const cartData = localStorage.getItem('cart');
        const cart = JSON.parse(cartData || '[]'); // Use an empty array if cart data is not available
        const deliveryAddress = localStorage.getItem('deliveryAddress');       
        const deliveryAdd =  JSON.parse(deliveryAddress || '[]');
  
        if (sessionData) {
            // If there is a session, extract the token
            const session = JSON.parse(sessionData);
            const token = session.token;
           
                      
            // Prepare the order data with items and token
            const orderData = {
                items: cart, // Assuming your cart data is an array of items
                jwty: token,
                deliveryAddress:deliveryAdd
            };
    
            try {
                // Send the order data to the server for processing
                const response = await fetch('http://localhost:5000/api/order/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderData)
                });
    
                if (response.ok) {
                    // Order was successfully created, handle the response
                    const orderResponse = await response.json();
                    console.log('Order created:', orderResponse);
                    // Clear the cart after successful order
                    localStorage.removeItem('cart');
                    cartItemsContainer.innerHTML = '<h1>Add dishes to cart</h1>';
                } else {
                    // Handle error response from the server
                    console.error('Error creating order');
                }
            } catch (error) {
                console.error('Error creating order:', error);
            }
        } else {
            // If there is no session, ask the user for email and phone number
            const email = prompt('Please enter your email:');
            const phone = prompt('Please enter your phone number:');
    
            // // You can validate and use the email and phone data as needed
            // console.log('Email:', email);
            // console.log('Phone:', phone);
            const orderData = {
                items: cart, // Assuming your cart data is an array of items
                deliveryAddress:deliveryAdd,
                email:email,
                phone:phone
            };
    
            try {
                // Send the order data to the server for processing
                const response = await fetch('http://localhost:5000/api/order/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderData)
                });
    
                if (response.ok) {
                    // Order was successfully created, handle the response
                    const orderResponse = await response.json();
                    console.log('Order created:', orderResponse);
                    // Clear the cart after successful order
                    localStorage.removeItem('cart');
                    cartItemsContainer.innerHTML = '<h1>Add dishes to cart</h1>';
                } else {
                    // Handle error response from the server
                    console.error('Error creating order');
                }
            } catch (error) {
                console.error('Error creating order:', error);
            }
        }

        
    });
    // Render cart items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<h1>Add dishes to cart</h1>';
    } else {
        renderCartItems(cart);

    }

    function removeFromCart(itemId) {
        // Find the index of the item with the given itemId in the cart array
        const itemIndex = cart.findIndex(item => item.id === itemId);
    
        if (itemIndex !== -1) {
            // Remove the item from the cart array by its index
            cart.splice(itemIndex, 1);
    
            // Optionally, you can update the cart UI here to reflect the removal
            // For example, you can call renderCartItems again to refresh the cart view
            renderCartItems(cart);
    
            // Optionally, you can also update the local storage to reflect the changes
            updateCartLocalStorage(cart);
        }
    }
    // Function to update cart data in local storage
    function updateCartLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    }
    // Function to increase quantity of an item in the cart
function increaseQuantity(item) {
    item.quantity += 1;
    renderCartItems(cart); // Update the cart UI
    updateCartLocalStorage(cart); // Update local storage
}

// Function to decrease quantity of an item in the cart
function decreaseQuantity(item) {
    if (item.quantity > 1) {
        item.quantity -= 1;
        renderCartItems(cart); // Update the cart UI
        updateCartLocalStorage(cart); // Update local storage
    }
}
 
}
