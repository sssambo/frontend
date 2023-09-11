// Function to load login form
function loadLoginForm() {
    fetch('login.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('loginSection').innerHTML = data;
        });
}

// Function to load signup form
function loadSignupForm() {
    fetch('signup.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('signupSection').innerHTML = data;
        });
}

// Add event listeners to the buttons
document.getElementById('showLoginButton').addEventListener('click', loadLoginForm);
document.getElementById('showSignupButton').addEventListener('click', loadSignupForm);