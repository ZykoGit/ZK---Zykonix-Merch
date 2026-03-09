const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    // Swap icon between ☰ and ✕
    hamburger.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});
