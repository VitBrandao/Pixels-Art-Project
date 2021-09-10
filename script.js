window.onload = resetToWhite() 

function resetToWhite() {
    let pixelList = document.querySelectorAll(".pixel");
    for (index = 0; index < pixelList.length; index += 1) {
        pixelList[index].style.backgroundColor = "white"; 
    }
}
   
/*
function fillPixels(pixels){
    for (let index = 0; index < pixels.length; index += 1) {
        fourExtraPixels(pixels[index]);
    }
}

function fourExtraPixels () {
    for (let index = 0; index < 4; index += 1) {
        let newPixels = document.createElement("div");
        pixels.appendChild(newPixels);
    }
} */
