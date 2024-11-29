// Save scroll position and target page before navigating
function navigateToPage(page) {
    const scrollPosition = window.scrollY;
    localStorage.setItem('scrollPosition', scrollPosition);
    localStorage.setItem('targetPage', page); // Save the target page
    document.location = page; // Navigate to the target page
}

// Restore scroll position when the page loads
window.onload = function () {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        localStorage.removeItem('scrollPosition'); // Clean up
    }
};