// Navigate back to the saved target page
function goBack() {
    const previousPage = localStorage.getItem('index.html');
    if (previousPage) {
        document.location = previousPage; // Go back to the previous page
    } else {
        history.back(); // Fallback in case targetPage is not set
    }
}
