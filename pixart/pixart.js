console.log("Up and running");

const form = document.querySelector("form");
form.addEventListener("submit", getColor)

function getColor(event) {
    event.preventDefault();
    const colorField = document.querySelector("#color-field");
    console.log(colorField.value);
    document.querySelector(".brush").style.backgroundColor = colorField.value;
}


