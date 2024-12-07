document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const dropdownMenu = document.querySelector("#dropdown-menu");
    const header = document.querySelector("header"); // Parent container

    menuToggle.addEventListener("click", () => {
        dropdownMenu.classList.toggle("show");
    });

    // Hide menu when cursor leaves the header
    header.addEventListener("mouseleave", () => {
        dropdownMenu.classList.remove("show");
    });
});
