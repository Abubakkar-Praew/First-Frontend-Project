const mainSection = document.querySelector(".introduction");
const calculator = document.querySelector("#Calculator");
let display = document.querySelector('#display').value;

function calculatorDisplay () {
    mainSection.classList.add("hidden");
    calculator.classList.remove("hidden");
}

function percetage() {
    let percentValue = display;
    percentValue = eval(display)
    alert(percentValue);
}