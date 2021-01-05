console.log("Up and running");

const form = document.querySelector("form");
form.addEventListener("submit", getColor);
form.addEventListener("enter", checkKey);

function getColor(event) {
    event.preventDefault();
    const colorField = document.querySelector("#color-field");
    console.log(colorField.value);
    document.querySelector(".brush").style.backgroundColor = colorField.value;
}

//w3schools.com
function checkKey(event) {
    if (event.keyCode === 13) {
        getColor(event)
    }
}

function addPixel(i) {
    const pix = document.createElement("div");
    pix.setAttribute("class", "square");
    pix.setAttribute("id", "div" +i);
    document.querySelector("body").appendChild(pix);
    console.log(pix);
}

let total = 20;
for (i=1; i <=total; i++) {
    addPixel(i);
}

const clicked = document.querySelector("body");
clicked.addEventListener("click", changeColor);

let j=1;
function changeColor () {
    document.getElementById("div" + j).style.backgroundColor = "green";
    document.getElementById("div" + j).className += " painted";
    j += 1;
}