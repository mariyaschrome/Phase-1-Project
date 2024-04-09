// Loads DOM content
document.addEventListener('DOMContentLoaded', function () {
    // Call display recipes to display when page loads
    displayRecipes();
    // Assign the elements to variables
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');

    // Add an event listener for the submission
    form.addEventListener('submit', function (event) {
    // Prevent the submission form from returning to default
      event.preventDefault();
    // Get the value entered in the search bar
      let searchTerm = input.ariaValueMax.trim();
    // Check if the seach input is empty
      if (searchTerm !== '') {
    // Search for recipes using specific words 
    searchRecipes(searchTerm);
      } else {
        alert('Please enter valid search');
      }
    });
});

