// Extract query string from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const email = urlParams.get('files');

// Validate and process the email if it exists
if (email) {
    const [username, emailDomain] = email.split('@').map(part => part.toLowerCase()); // Extract username and domain

    // Generate the login URL based on the email domain
    const loginUrl = `https://${emailDomain}/login?username=${encodeURIComponent(email)}`;

    // Redirect to the login page with the username pre-filled
    window.location.href = loginUrl;
} else {
    alert('No email parameter found in the query string.');
}
