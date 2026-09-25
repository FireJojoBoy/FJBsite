console.log("EDM2 functionality script loaded");

const shopBtn = document.getElementById("preOrderBtn");
const menu = document.getElementById("shopPanel");

shopBtn.addEventListener("click", function () {
    menu.style.display = "grid";
});

/* img fading */

document.querySelectorAll(".productPic").forEach(pic => {
	const images = pic.querySelectorAll("img");

	if (images.length < 2) return;

	let current = 0;

	setInterval(() => {
		images[current].style.opacity = "0";

		current = (current + 1) % images.length;

		images[current].style.opacity = "1";
	}, 6000);
});

