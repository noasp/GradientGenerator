
// Select elements to work with
var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var randomButton = document.querySelector("#randomButton");

// Set initial gradient colors for input values on page load
color1.setAttribute("value", "#48D1CC");
color2.setAttribute("value", "#FFFACD");

// get initial CSS Property and create h3 text on page load
var cssGradientProperty = window.getComputedStyle(body).getPropertyValue("background-image");

css.textContent = cssGradientProperty;

// Create functions
function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background;
}

function createRandom() {
  var hex = "#" + Math.floor(Math.random() * 16777216).toString(16);
  return hex;
}

function setRandom() {
  var random1 = createRandom();
  var random2 = createRandom();
  body.style.background = "linear-gradient(to right, " + random1 + ", " + random2 + ")";
  css.textContent = body.style.background;
  color1.setAttribute("value", random1);
  color2.setAttribute("value", random2);

}

// Add listeners to color inputs and random button
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandom);
