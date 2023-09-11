// Common variables and functions
import { home } from './home.js';
import { loadMenu } from './menu.js';
import { loadProfile } from './profile.js';
import {all     }       from './cart.js'


// Function to load content into the main section
function loadContent(route) {
    const content = document.getElementById('content');

    // Load content based on the route
    switch (route) {
        case 'home':
            home();
            //content.innerHTML = '<h2>Welcome to our Food Ordering SPA</h2>';
            break;
        case 'menu':
            loadMenu();
            break;
        case 'cart':
            all();
            break;
        case 'profile':
            loadProfile();
            break;
        default:
            content.innerHTML = '<h2>404 - Page not found</h2>';
    }
}

// Function to handle navigation links
function handleNavigation() {
    const nav = document.querySelector('nav');
nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        const route = event.target.getAttribute('href').substring(1); // Remove the '#' symbol
        loadContent(route);
        event.preventDefault();
    }
});
}

// Initial load of content
loadContent('home');

// Initialize navigation
handleNavigation();
