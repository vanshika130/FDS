function loadContent(page) {
    const contentSection = document.getElementById('content');
    
    switch (page) {
        case 'community':
            contentSection.innerHTML = '<h2>Community</h2><p>Join our community discussions and collaborate with others.</p>';
            break;
        case 'projects':
            contentSection.innerHTML = '<h2>Projects</h2><p>Explore and contribute to ongoing projects.</p>';
            break;
        case 'code quest':
            // Redirect to code quest page instead of loading content dynamically
            window.location.href = 'code-quest.html';
            break;
        case 'people':
            contentSection.innerHTML = '<h2>People</h2><p>Meet and connect with other members.</p>';
            break;
        case 'contact':
            contentSection.innerHTML = '<h2>Contact Us</h2><p>Reach out to us for any support or inquiries.</p>';
            break;
        case 'settings':
            contentSection.innerHTML = '<h2>Settings</h2><p>Adjust your account settings here.</p>';
            break;
        default:
            contentSection.innerHTML = '<h2>Welcome</h2><p>Select a section from the buttons on the side.</p>';
    }
}