// Get the form element and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();

    // Get the input field value
    const input = document.querySelector('input[name="domain"]');
    const domain = input.value;

    // Make a GET request to the /lookup endpoint with the domain name as a parameter
    fetch(`/lookup?domain=${domain}`)
        .then(response => response.text())
        .then(data => {
            // Update the page with the DNS lookup results
            const resultsContainer = document.querySelector('#results');
            resultsContainer.innerHTML = data;
        });
});
