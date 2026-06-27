const images = [
    "media/image 1",
    "media/image 1",
    "media/image 1",
    "media/image 1",
    "media/image 1",
    "media/image 1"
];

let currentIndex = 0;

function openImage(index){

    currentIndex = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src =
    images[currentIndex];
}

function closeImage(){

    document.getElementById("lightbox").style.display = "none";
}

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
    images[currentIndex];
}

function previousImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    document.getElementById("lightbox-img").src =
    images[currentIndex];
}