export function homefn (){
    // Get references to login and signup buttons
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const homeContainer = document.getElementById('content');

// // Get references to login and signup forms
const loginForm = document.getElementById('login-form');
 const signupForm = document.getElementById('signup-form');

// Add event listeners to show/hide forms
loginBtn.addEventListener('click', () => {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

signupBtn.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

// Add event listeners to handle form submissions
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('logpassword').value;

    // Create a JSON object for login data
    const loginData = {
        email: email,
        password: password
    };

    // Send JSON data to the login endpoint
    sendDataToServer(loginData, 'login');
});

// Event listener for signup form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('sigpassword').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Check if the password and confirm password match (case-sensitive)
    if (password !== confirmPassword) {
        alert('Password and confirm password do not match');
        return;
    }

    // Create a JSON object for signup data
    const signupData = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };


    // Send JSON data to the signup endpoint
    sendDataToServer(signupData, 'register');
});



// Function to send JSON data to the server
function sendDataToServer(data, endpoint) {
    fetch(`http://localhost:5000/api/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(dataa => {
        if (endpoint == 'login') {
            localStorage.setItem('session', JSON.stringify(dataa));
            const sessionData = JSON.parse(localStorage.getItem('session')); // Parse the stored data
            const logged = document.createElement('div');
            logged.id='username';
            logged.style.color = 'red';
            logged.style.position= 'top';
            logged.textContent =  `Welcome User Back, ${dataa.user.name}`;
            homeContainer.appendChild(logged);
            console.log('session token:', sessionData.token); // Access the token property
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors
    });
}

}