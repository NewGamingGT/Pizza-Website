let imagePos = 0;
let images = ["pizza1.jpg", "pizza2.jpg", "pizza3.jpg"];

let mainContent = document.querySelector(".mainContent");

function previousImage()
{
	if (imagePos > 0)
	{
		imagePos--;
		mainContent.style.backgroundImage = `url(img/header/${images[imagePos]})`;
	}
	else {
		imagePos = images.length - 1;
		mainContent.style.backgroundImage = `url(img/header/${images[imagePos]})`;
	}
}

function nextImage() {
	if (imagePos < images.length - 1) {
		imagePos++;
		mainContent.style.backgroundImage = `url(img/header/${images[imagePos]})`;
	}
	else {
		imagePos = 0;
		mainContent.style.backgroundImage = `url(img/header/${images[imagePos]})`;
	}
}

let interval = setInterval( () => {
	if (imagePos < images.length - 1) {
		imagePos++;
		mainContent.style.backgroundImage = `url(img/header/${images[imagePos]})`;
	}
	else {
		imagePos = 0;
		mainContent.style.backgroundImage = `url(img/header/${images[imagePos]})`;
	}
}, 10000);