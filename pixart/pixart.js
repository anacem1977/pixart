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

function addPixel () {
    const node = document.createElement("div");
    const textnode = document.createTextNode(" ");
    node.appendChild(textnode);
    document.querySelector("body").appendChild(node).className = "square";
    document.querySelector(".square").style.backgroundColor = "#E7E5D";
    document.querySelector(".square").style.width = "10px";
    document.querySelector(".square").style.height = "10px";
}

for (i=0; i <=20; i++) {
    addPixel();
}