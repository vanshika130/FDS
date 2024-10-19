document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can add your authentication logic

    // Redirect to the home page after successful sign-in
    window.location.href = "home.html";
});