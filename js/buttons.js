"use string"

const mainBtn = document.querySelectorAll(".detail__button");
const pages = [
    "lifestyle.html",
    "adornment.html",
    "journeys.html",
    "stars.html",
]


mainBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        window.location.href = pages[index];
    });
});