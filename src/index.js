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

     // fetch data from the Spoonacular API using the url
   fetch(url)
   .then(response => {
       // Check if the response status is ok
       if (!response.ok) {
           // If the response is not ok show an error
           throw new Error('Response was not ok');
       }
       // If the resposne status is ok, parse the JSON data
       return response.json();
   })
   .then(data => {
       // Once the data is fetched, call the display recipes function
       displayRecipes(data.results);
   })
   // Show any errors
   .catch(error => {
       console.error('Error fetching data:', error);
   });
}

// Function to display the recipes on the webpage
function displayRecipes(recipes) {
    // Get the reference to the recipe-conntainer element
    const recipeContainer = document.getElementById('recipe-container');
    // Clear any previous results
    recipeContainer.innerHTML = '';
 
 
    // Iterate through each recipe
    recipes.forEach(recipe => {
        // Create a div element to represent each recipe card
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        // Populate the inner HTML of the recipe card div with recipe details
        recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" />
        <h3>${recipe.title}</h3>
        <p>Ready in ${recipe.readyInMinutes} minutes</p>
        `;
        // Add a click event listener to the recipe card
        recipeCard.addEventListener('click', function() {
            // Call function to display the recipe information when the card is clicked
            displayRecipeInformation(recipe.id);
        });
        // Append the recipe card div to the recipe container
        recipeContainer.appendChild(recipeCard);
    });
 }

 
 