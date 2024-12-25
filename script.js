// script.js

// Get references to the DOM elements
const addCategoryButton = document.getElementById('addCategoryButton');
const categoryList = document.getElementById('categoryList');

// Function to add a new category
function addCategory() {
  const categoryName = prompt('Enter a category name:');
  if (categoryName) {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = categoryName;

    // Append the new category to the list
    categoryList.appendChild(listItem);
  }
}

// Add event listener to the button
addCategoryButton.addEventListener('click', addCategory);
