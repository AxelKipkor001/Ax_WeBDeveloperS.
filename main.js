document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    // Add an event listener to toggle classes on click
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("bx-x"); // Toggle menu icon appearance
        navbar.classList.toggle("active"); // Toggle navbar visibility
    });

    // Ensure proper navbar behavior on window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) { // Adjust breakpoint as needed
            navbar.classList.remove("active"); // Always show navbar on larger screens
            menuIcon.classList.remove("bx-x"); // Reset the menu icon
        }
    });
});