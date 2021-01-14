console.log("Up and running");

const cont = document.createElement("div");
    cont.setAttribute("class", "container");
    document.querySelector("body").appendChild(cont);

const form = document.querySelector("form");
form.addEventListener("submit", getColor);
form.addEventListener("enter", checkEnter);

//CREATE BOXES FOR COLOR SWATCH
const newContainer = document.createElement("div");
newContainer.setAttribute("id", "new-cont");
document.querySelector("div.controls").appendChild(newContainer);
newContainer.style.display = "none";

const brush1 = document.createElement("div");
brush1.setAttribute("class", "newSquare");
brush1.setAttribute("id", "firstBrush");
brush1.style.width = "30px";
brush1.style.height = "30px";
document.querySelector("#new-cont").appendChild(brush1);
brush1.style.display = "none";

const brush2 = document.createElement("div");
brush2.setAttribute("class", "newSquare");
brush2.setAttribute("id", "secondBrush");
brush2.style.width = "30px";
brush2.style.height = "30px";
document.querySelector("#new-cont").appendChild(brush2);
brush2.style.display = "none";

const brush3 = document.createElement("div");
brush3.setAttribute("class", "newSquare");
brush3.setAttribute("id", "thirdBrush");
brush3.style.width = "30px";
brush3.style.height = "30px";
document.querySelector("#new-cont").appendChild(brush3);
brush3.style.display = "none";

const colorsArray = [];
const threeColorsArray = [];

function getColor(event) {
    event.preventDefault();
    newContainer.style.display = "initial";
    const colorField = document.querySelector("#color-field");
    document.querySelector(".brush").style.backgroundColor = colorField.value;
    colorsArray.push(colorField.value);
    threeColorsArray.push(colorField.value);
    if (threeColorsArray.length > 3) {
        threeColorsArray.shift()
    }
    document.querySelector("#firstBrush").style.background = threeColorsArray[0];
    brush1.style.display ="inline-block";
    console.log(colorsArray);
    console.log(threeColorsArray);
    if (colorsArray.length === 2){
        document.querySelector("#secondBrush").style.background = colorsArray[1];
        brush2.style.display ="inline-block";
    } else if (colorsArray.length === 3) {
        document.querySelector("#thirdBrush").style.background = colorsArray[2];
        brush3.style.display ="inline-block";
        } else {
        document.querySelector("#firstBrush").style.background = threeColorsArray[0];
        document.querySelector("#secondBrush").style.background = threeColorsArray[1];
        document.querySelector("#thirdBrush").style.background = threeColorsArray[2]; 
    }
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

//CREATE TURN OFF MESSAGE
const brushOff = document.createElement("h3");
const brushOffTxt = document.createTextNode("Paintbrush Off");
brushOff.setAttribute("class", "off");
brushOff.appendChild(brushOffTxt);

//CREATE TURN ON MESSAGE
const brushOn = document.createElement("h3");
const brushOnTxt = document.createTextNode("Paintbrush On");
brushOn.setAttribute("class", "on");
brushOn.appendChild(brushOnTxt);

//at first click
    //it shold turn the pain off and set a message
//at second click
    //it shold remove the message and put a new one, and set the brush on
//at next click
    //it shold remove the message and put a new one, and set the brush off

let counter = 0;
function countClicks() {
    counter ++;
    //console.log(counter);
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
    document.querySelector(".controls").appendChild(brushOff);
    if (document.querySelector(".on")) {
        document.querySelector(".on").style.display = "none";
        document.querySelector(".off").style.display = "block";
    }
}

function turnOn() {
    console.log("Running turnOn");
    hovered.addEventListener("mouseover", changeColor);
    document.querySelector(".controls").appendChild(brushOn);
    if (document.querySelector(".off")) {
        document.querySelector(".off").style.display = "none";
        document.querySelector(".on").style.display = "block";
    }
}
