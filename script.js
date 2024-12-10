// Select all dropdown buttons
const dropdownButtons = document.querySelectorAll('.dropdown-btn');

// Add a click event listener to each button
dropdownButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Find the corresponding carousel-container
        const carouselContainer = button.nextElementSibling;

        // Toggle the "open" class on the carousel-container
        carouselContainer.classList.toggle('open');

        button.classList.toggle('active');
    });
});

document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});
