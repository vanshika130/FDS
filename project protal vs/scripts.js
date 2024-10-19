// Functionality for logout button
document.getElementById('logout-button').addEventListener('click', function(event) {
    event.preventDefault();
    // Perform the logout action here, like redirecting to a login page
    alert("You have been logged out!");
    window.location.href = "login.html"; // Redirects to login page after logout
});

// Function to dynamically load content into the content section
function loadContent(page) {
    const contentSection = document.getElementById('content');
    
    switch (page) {
        case 'Article':
            contentSection.innerHTML = '<h2>Welcome to the Article Page</h2><p>ARTICLE.</p>';
            break;
        case 'Learning':
            contentSection.innerHTML = '<h2>Learning</h2><p>Here is the list of your ongoing LEARNING COURSES.</p>';
            break;
        case 'People':
            contentSection.innerHTML = '<h2>People</h2><p>Join our community discussions and collaborate with other users.</p>';
            break;
        case 'JoinNow':
            contentSection.innerHTML = '<h2>Join Now</h2><p>Learn more about joining the Project Portal.</p>';
            break;
        case 'AboutUs':
            contentSection.innerHTML = '<h2>About Us</h2><p>Learn more about the mission of the Project Portal.</p>';
            break;
        default:
            contentSection.innerHTML = '<h2>Welcome</h2><p>Select a section from the navigation menu.</p>';
    }
}

// Add click event listeners to navigation links to load content dynamically
document.querySelectorAll('nav ul li a').forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
        event.preventDefault();
        const page = this.getAttribute('data-page'); // Get the page from data attribute
        loadContent(page);
    });
});

// Load the default content on page load
window.onload = function() {
    loadContent('Article'); // Default content is the home section
};