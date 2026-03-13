const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburger.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.dataset.img;

        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
    });
});

// Auto-scroll every 15 seconds
let index = 0;
setInterval(() => {
    index = (index + 1) % thumbs.length;
    thumbs[index].click();
}, 15000);
