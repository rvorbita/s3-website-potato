document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with the class 'toggle-details'
    const toggleButtons = document.querySelectorAll('.toggle-details');

    // Loop through each button and attach an event listener
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the parent recipe-item element
            const recipeItem = this.closest('.recipe-item');

            // Find the hidden details list within this recipe-item
            const detailsList = recipeItem.querySelector('.details-list');

            // Toggle the 'hidden' class on the details list
            detailsList.classList.toggle('hidden');

            // Optionally, change the button text based on visibility
            if (detailsList.classList.contains('hidden')) {
                this.textContent = 'Show Ingredients';
            } else {
                this.textContent = 'Hide Ingredients';
            }
        });
    });
});