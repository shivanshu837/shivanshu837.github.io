const images = ['/images/dog.jpg', '/images/panda.jpg', '/images/tiger.jfif'];
let currentImageIndex = 1;

document.getElementById("prev").onclick = function () {
    currentImageIndex = (currentImageIndex + images.length - 1) % 3;
    displayImage();
}

document.getElementById("next").onclick = function () {
    currentImageIndex = (currentImageIndex + 1) % 3;
    displayImage();
}

function displayImage() {
    document.querySelector('img').src = images[currentImageIndex];
}