const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("button");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
	let hexColor = "#";

	for (i = 0; i < 6; i++) {
		let randomValue = getRandomValue();
		hexColor += hex[randomValue];
	}
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
});

function getRandomValue() {
	return Math.floor(Math.random() * hex.length);
}
