console.log("Up and running");

const cont = document.createElement("div");
    cont.setAttribute("class", "container");
    document.querySelector("body").appendChild(cont);

const form = document.querySelector("form");
form.addEventListener("submit", getColor);
form.addEventListener("enter", checkEnter);

const colorsArray = [];

function getColor(event) {
    event.preventDefault();
    const colorField = document.querySelector("#color-field");
    document.querySelector(".brush").style.backgroundColor = colorField.value;
    colorsArray.push(colorField.value);
    console.log(colorsArray);
}

//w3schools.com
function checkEnter(event) {
    if (event.keyCode === 13) {
        getColor(event)
    }
}

function addPixel() {
    const pix = document.createElement("div");
    pix.setAttribute("class", "square");
    document.querySelector(".container").appendChild(pix);
}

let total = 8000;
for (i=1; i <=total; i++) {
    addPixel();
}

const hovered = document.querySelector(".container");
hovered.addEventListener("mouseover", changeColor);

function changeColor(evt) {
    evt.target.style.backgroundColor = document.querySelector(".brush").style.backgroundColor;
  }