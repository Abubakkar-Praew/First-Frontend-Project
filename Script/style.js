const mainSection = document.querySelector(".introduction");
const calculator = document.querySelector("#Calculator");
let display = "";

function calculatorDisplay () {
    mainSection.classList.add("hidden");
    calculator.classList.remove("hidden");
}