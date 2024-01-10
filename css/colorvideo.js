// script.js
const grayscaleDivs = document.querySelectorAll(".video-container");

grayscaleDivs.forEach(div => {
    div.addEventListener("click", () => {
        div.style.filter = "none";
    });
});