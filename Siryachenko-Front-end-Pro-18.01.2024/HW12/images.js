var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

var randomIndex = Math.floor(Math.random() * images.length);

var randomImage = images[randomIndex];

var imgElement = document.createElement("img");

imgElement.src = "images/" + randomImage;

document.body.appendChild(imgElement);
