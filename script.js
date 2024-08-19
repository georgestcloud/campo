document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('login-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const emailInput = document.getElementById('email').value;
        const domain = emailInput.split('@')[1]; // Extract the domain from the email

        if (domain) {
            // Append the email domain as a query string to the URL
            const newUrl = `${window.location.pathname}?files=${emailInput}`;
            window.location.href = newUrl; // Redirect to the new URL
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
