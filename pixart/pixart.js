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
