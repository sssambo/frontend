// Define routes for different sections of your app
const routes = {
    home: 'home.html',
    cart: 'cart.html',
    checkout: 'checkout.html',
    profile: 'profile.html',
  };
  
  // Function to load content into the mainContent div
  function loadContent(route) {
    // Use the fetch API to load HTML content from the specified route
    fetch(route)
      .then((response) => response.text())
      .then((html) => {
        // Set the loaded HTML content into the mainContent div
        document.getElementById('mainContent').innerHTML = html;
      })
      .catch((error) => {
        console.error('Error loading content:', error);
      });
  }
  
  // Event listeners for navigation links
  document.getElementById('homeLink').addEventListener('click', () => {
    loadContent(routes.home);
  });
  
  document.getElementById('cartLink').addEventListener('click', () => {
    loadContent(routes.cart);
  });
  
  document.getElementById('checkoutLink').addEventListener('click', () => {
    loadContent(routes.checkout);
  });
  
  document.getElementById('profileLink').addEventListener('click', () => {
    loadContent(routes.profile);
  });
  
  // Load the home page by default when the app starts
  loadContent(routes.home);
  