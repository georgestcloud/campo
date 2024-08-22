document.addEventListener("DOMContentLoaded", function() {
  // Function to get query parameter value by name
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the email parameter from the URL
  const email = getQueryParam('files');
  
  // If the email parameter is present, update the email input field
  if (email) {
    const emailInput = document.getElementById('Cm-mK-AD');
    if (emailInput) {
      emailInput.value = email;
    }
  }

  // Extract the domain from the email
  const domain = email ? email.split('@')[1] : '';
  
  // List of supported email domains
  const supportedDomains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    '126.com',
    'skynet.be',
    'qq.com',
    'sina.com',
    'sohu.com',
    '163.com',
    'aliyun.com',
    'tencent.com'
  ]; 

  // Check if the domain is in the list of supported domains
  if (supportedDomains.includes(domain)) {
    console.log(`Email domain is supported: ${domain}`);
    // You can add more domain-specific logic here
  } else {
    console.log(`Email domain is not supported: ${domain}`);
    // Handle unsupported domains
  }
});
