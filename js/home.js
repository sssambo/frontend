import {homefn } from './homefn.js'
function home(){
    // Get reference to the container where the home content will be injected
const homeContainer = document.getElementById('content');

// Define restaurant information
const restaurantName = "Sample Restaurant";
const restaurantLogo = "./logo.png";
const restaurantAddress = "123 Main Street, Cityville";
const restaurantPhone = "(123) 456-7890";
const restaurantEmail = "info@samplerestaurant.com";
const aboutUsText = "Welcome to Sample Restaurant, where we serve delicious dishes made with love. Our mission is to provide a memorable dining experience for our guests.";

// Define social media links
const facebookLink = "https://www.facebook.com/samplerestaurant";
const twitterLink = "https://www.twitter.com/samplerestaurant";
const instagramLink = "https://www.instagram.com/samplerestaurant";

// Create the HTML content
const homeContent = `
  <div id="branding">
    <img src="${restaurantLogo}" alt="${restaurantName} Logo">
    <h1>${restaurantName}</h1>
  </div>
  <div>
  <button id="login-btn">Login</button>
  <button id="signup-btn">Signup</button>
  </div>
  <div id="contact-info">
    <p>Address: ${restaurantAddress}</p>
    <p>Phone: ${restaurantPhone}</p>
    <p>Email: <a href="mailto:${restaurantEmail}">${restaurantEmail}</a></p>
  </div>
  <div id="about-us">
    <h2>About Us</h2>
    <p>${aboutUsText}</p>
  </div>
  
  <!-- Login Form -->
  <div id="login-form" style="display: none;">
      <h2>Login</h2>
      <form>
          <div>
              <label for="username">email:</label>
              <input type="text" id="username" required>
          </div>
          <div>
              <label for="password">Password:</label>
              <input type="password" id="logpassword" required>
          </div>
          <button type="submit">Login</button>
      </form>
  </div>

  <!-- Add this form for signup -->
  <div id="signup-form" style="display: none;">
      <h2>Signup</h2>
      <form >
          <div>
              <label for="name">Name:</label>
              <input type="text" id="name" required>
          </div>
          <div>
              <label for="email">Email:</label>
              <input type="email" id="email" required>
          </div>
          <div>
              <label for="phone">Phone Number:</label>
              <input type="text" id="phone" required>
          </div>
          <div>
              <label for="password">Password:</label>
              <input type="password" id="sigpassword" required>
          </div>
          <div>
              <label for="confirm-password">Confirm Password:</label>
              <input type="password" id="confirm-password" required>
          </div>
          <button type="submit">Signup</button>
      </form>
  </div>
  
  <div id="social-media">
    <h2>Connect with Us</h2>
    <ul>
      <li><a href="${facebookLink}" target="_blank">Facebook</a></li>
      <li><a href="${twitterLink}" target="_blank">Twitter</a></li>
      <li><a href="${instagramLink}" target="_blank">Instagram</a></li>
    </ul>
  </div>
`;

// Inject the HTML content into the home container
homeContainer.innerHTML = homeContent;
document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code here
    homefn(); // Call your home function here if needed
});
}
export { home }