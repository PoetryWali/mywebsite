const toggleButton = document.getElementById("theme-toggle");

// Check if dark mode was previously selected by the user
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Add event listener to the button to toggle between modes
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save the user's theme preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
