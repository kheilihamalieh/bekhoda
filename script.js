// Initialize categories array
let categories = [];

// Function to display categories
function displayCategories() {
  const categoriesList = document.querySelector("#categories ul");
  categoriesList.innerHTML = ""; // Clear the list

  categories.forEach((category, index) => {
    const li = document.createElement("li");
    li.textContent = category;
    categoriesList.appendChild(li);
  });
}

// Add event listener for "Add Category" button
document.getElementById("addCategory").addEventListener("click", () => {
  const categoryName = prompt("Enter category name:");
  if (categoryName) {
    categories.push(categoryName);
    displayCategories();
  }
});

// Initial render
displayCategories();
