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
  });
  