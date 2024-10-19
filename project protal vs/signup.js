document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can add your sign-up logic

    // Redirect to the home page after successful sign-up
    window.location.href = "home.html";
});