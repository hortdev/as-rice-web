// saerch icon animation style
const searchInput = document.querySelector('.search');
    const searchBox = document.querySelector('.search-box');

    // When the input is focused, add the 'focused' class to the search box
    searchInput.addEventListener('focus', () => {
        searchBox.classList.add('focused');
    });

    // When the input is blurred (focus removed), remove the 'focused' class
    searchInput.addEventListener('blur', () => {
        searchBox.classList.remove('focused');
    });
