document.addEventListener("DOMContentLoaded", function() {
    const colorToggleButton = document.getElementById("colorToggle");

    if (colorToggleButton) {
        colorToggleButton.parentNode.removeChild(colorToggleButton);
    }
});
