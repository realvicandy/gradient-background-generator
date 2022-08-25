var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button");

function changeColor() {
	body.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")";
	css.textContent = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")"; // I opted to copy paste this line instead of body.style.background even though its longer and maybe less modular because I like the way hash values look better than rgb values
}

function random() {
	var deg = Math.floor(Math.random() *360);
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right, #" + randomColor1 +", #"+ randomColor2 +")";
	css.textContent = "linear-gradient(to right, #" + randomColor1 +", #"+ randomColor2 +")";
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
button.addEventListener("click", random);