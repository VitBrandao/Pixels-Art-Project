// Janela carregada: reseta pixels para branco (requisito 4)
window.onload = resetToWhite

function resetToWhite() {
    let pixelList = document.querySelectorAll(".pixel");
    for (let index = 0; index < pixelList.length; index += 1) {
        pixelList[index].style.backgroundColor = "white"; 
    }
}

// Criando quadro de pixels (requisito 4)
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


// Manejando a cor selecionada através da class 'selected' (requisito 7)
let colorOne = document.body.querySelector("#black");
let colorTwo = document.body.querySelector("#red");
let colorThree = document.body.querySelector("#blue");
let colorFour = document.body.querySelector("#green");

colorOne.addEventListener("click", selectedColor);
colorTwo.addEventListener("click", selectedColor);
colorThree.addEventListener("click", selectedColor);
colorFour.addEventListener("click", selectedColor);

function selectedColor (event) {
    let oldColor = document.getElementsByClassName("selected")[0];
    oldColor.classList.remove("selected");

    event.target.classList.add("selected");
}


// Pintando os pixels (requisito 8)

let paintedPixel = document.body.querySelectorAll(".pixel");

for (let index = 0; index < paintedPixel.length; index += 1) {
    paintedPixel[index].addEventListener("click", paintingPixel);
}

function paintingPixel (event) {
    let selected = document.body.querySelector(".selected");

    // Sobre a linha abaixo, sinto que preciso fazer um comentário, afinal, não vimos isso em aula.
    // Depois de quebrar MUITO a cabeça para armazenar a referida cor da paleta em uma variável, precisei ir atrás de um aprofundamento no conteúdo, pois todas minhas tentativas de "transferir" a background-color da palheta de cores para os pixels através de atribuições (=) estavam se mostrando ineficientes. Em todos os casos, o programa não estava "entendendo" minha intenção e não armazenava cor nenhuma na nova variável.
    // Logo, fui atrás de outras alternativas lá na biblioteca da W3, onde descobri o recurso "getComputedStyle", que faz exatamente o que eu estava procurando. Ao entender melhor a sintaxe desse comando, resgatei o elemento com a classe .selected dentro de uma variável e passei ela como parâmetro para esse novo comando que aprendi. 
    // Aqui, deixo o link consultado que me deu essa "luz": https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp 

    let selectedColor = window.getComputedStyle(selected, null).getPropertyValue('background-color');
    
    let colorfulPixel = event;
    colorfulPixel.target.style.backgroundColor = selectedColor;
}

// Botão "limpar" (requisito 9)

function whiteBoard() {
    let pixelList = document.querySelectorAll(".pixel");
    for (let index = 0; index < pixelList.length; index += 1) {
        pixelList[index].style.backgroundColor = "white"; 
    }

    /*
    let lines = document.querySelectorAll(".line");
    for (let index = 0; index < lines.length; index += 1) {
        lines[index].style.backgroundColor = "white";
    }

    let board = document.getElementById("pixel-board");
    board.style.backgroundColor = "white"; */
}
 
let button = document.body.querySelector("#clear-board");
button.addEventListener("click", whiteBoard);
