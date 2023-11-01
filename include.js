document.addEventListener("DOMContentLoaded", function() {
    // Find the placeholder element
    const navPlaceholder = document.getElementById("nav-placeholder");

    // Create a new element for the navigation bar
    const navBar = document.createElement("nav");
    navBar.innerHTML = '<ul><li><a href="index.html">Return to Home</a></li></ul>';

    // Replace the placeholder with the navigation bar
    navPlaceholder.parentNode.replaceChild(navBar, navPlaceholder);
});
