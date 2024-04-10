// Function to execute when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Set variables for elements in order to get references
       const form = document.getElementById('search-form');
       const input = document.getElementById('search-input');

       // Add an Event Listener for form submission
   form.addEventListener('submit', function (event) {
    // Prevent the default submission behaviour
    event.preventDefault();
    // Get the value entered in the search bar
    const searchTerm = input.value.trim();
    // Check if the search term is not empty
    if (searchTerm !== '') {
    // If the search term is valid call the searchRecipes function
    searchRecipes(searchTerm);
    } else {
        // If the search term is empty, notify the user using an alert
        alert('Please enter valid search term');
    }
});
});

// Function to search for recipes based on the input
function searchRecipes(searchTerm) {
    // Set the baseURL and API key
    const apiKey = '154e5b7cef864d61b9258a1ac725315d';
    const baseURL = 'https://api.spoonacular.com/recipes/complexSearch';
    // Construct the full URL with the search term and API key
    const url = `${baseURL}?query=${searchTerm}&apiKey=${apiKey}`
}