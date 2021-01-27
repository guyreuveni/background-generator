var css = document.querySelector("h3")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button")

function updateBackground() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomHex() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

function upadateBackgroundRandomly() {
    color1.value = randomHex();
    color2.value = randomHex();
    updateBackground();
}

color1.addEventListener("input", updateBackground);

color2.addEventListener("input", updateBackground);

button.addEventListener("click", upadateBackgroundRandomly);
