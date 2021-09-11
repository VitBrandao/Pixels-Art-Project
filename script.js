window.onload = resetToWhite

function resetToWhite() {
    let pixelList = document.querySelectorAll(".pixel");
    for (index = 0; index < pixelList.length; index += 1) {
        pixelList[index].style.backgroundColor = "white"; 
    }
}


function selectBlack () {
    let blackColor = document.getElementById("black");
    blackColor.className.add = "selected";
}

let div = document.querySelectorAll(".line");

function creatingPixels (div) {
    for (let index = 0; index < div.length; index += 1) {
        creatingBox(div[index]);
    }
}

function creatingBox (item) {
    for (let index = 0; index < 5; index += 1) {
        let newPixel = document.createElement("div");
        newPixel.className = "pixel"; 
        div[index].appendChild(newPixel);
    }
}

creatingPixels(div);


let colorOne = document.getElementById("black");
let colorTwo = document.getElementById("red");
let colorThree = document.getElementById("blue");
let colorFour = document.getElementById("green");

colorOne.addEventListener("click", selectedColor);
colorTwo.addEventListener("click", selectedColor);
colorThree.addEventListener("click", selectedColor);
colorFour.addEventListener("click", selectedColor);


function selectedColor (event) {
    let oldColor = document.getElementsByClassName("selected")[0];
    oldColor.classList.remove("selected");

    event.target.classList.add("selected");
}



