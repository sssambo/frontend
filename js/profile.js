export function loadProfile() {
    const sessionData = localStorage.getItem('session');
    const content = document.getElementById('content');
    // Implement profile content rendering here
    if (!sessionData) {
        
        content.innerHTML = '<h2>Profile</h2><p>Welcome, user!</p>';

    }else{content.innerHTML = '';
    const session = JSON.parse(sessionData);
    const profile = document.createElement('div');
    profile.classList.add('Profile');
    
    // Create elements for session details
    const sessionName = document.createElement('h3');
    sessionName.textContent = session.user.name;
    
    const sessionEmail = document.createElement('p');
    sessionEmail.textContent = `Email: ${session.user.email}`;
    
    const sessionPhone = document.createElement('p');
    sessionPhone.textContent = `Phone: ${session.user.phoneNumber}`;

    const sessionout = document.createElement('button');
    sessionout.textContent = `sign out`;

    const sessionorder = document.createElement('button');
    sessionorder.textContent = `List Orders`;

    
    // Append elements to the profile div
    profile.appendChild(sessionName);
    profile.appendChild(sessionEmail);
    profile.appendChild(sessionPhone);
    profile.appendChild(sessionorder);
    profile.appendChild(sessionout);

    //listener for signout    
    sessionout.addEventListener('click',()=>{
        localStorage.removeItem('session');
        content.innerHTML = '<h2>Profile</h2><p>Welcome, user!</p>';

    })
     //listener for getting orders    
     sessionorder.addEventListener('click',()=>{
               
    })
    content.appendChild(profile);
        }        
}
