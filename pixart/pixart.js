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

const clicked = document.querySelector(".container");
//clicked.addEventListener("click", turnOff);
clicked.addEventListener("click", countClicks);
clicked.addEventListener("click", turnOnOff);

function changeColor(evtH) {
    evtH.target.style.backgroundColor = document.querySelector(".brush").style.backgroundColor;
  }

//at first click
    //it shold turn the pain off and set a message
//at second click
    //it shold remove the message and put a new one, and set the brush on
//at next click
    //it shold remove the message and put a new one, and set the brush off

let counter = 0;
function countClicks() {
    counter ++;
    console.log(counter);
}

function turnOnOff () {
    if (counter % 2 !== 0) {
        turnOff();
    } else {
        turnOn();
    }
}

function turnOff() {
    console.log("Running turnOff");
    hovered.removeEventListener("mouseover", changeColor);
    clicked.addEventListener("click", turnOn);
    const brushOff = document.createElement("h3");
    const brushOffTxt = document.createTextNode("Paintbrush Off");
    brushOff.setAttribute("class", "off");
    brushOff.appendChild(brushOffTxt);
    document.querySelector(".controls").appendChild(brushOff);
    if (document.querySelector(".on")) {
        document.querySelector(".on").style.display = "none";
    }
}

function turnOn() {
    console.log("Running turnOn");
    hovered.addEventListener("mouseover", changeColor);
    clicked.removeEventListener("click", turnOff);
    const brushOn = document.createElement("h3");
    const brushOnTxt = document.createTextNode("Paintbrush On");
    brushOn.setAttribute("class", "on");
    brushOn.appendChild(brushOnTxt);
    document.querySelector(".controls").appendChild(brushOn);
    if (document.querySelector(".off")) {
        document.querySelector(".off").style.display = "none";
    }
}
