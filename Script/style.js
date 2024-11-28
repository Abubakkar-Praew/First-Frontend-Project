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

function appendOperator(operator) {
    let currentValue = display;
    if(currentValue === ' ') return;
    let lastValue = currentValue[currentValue.length-1];
    if (!['+', '-', '*', '/', '.'].includes(lastValue)) {
        display = display + operator;
        document.querySelector('#display').value = display;
      }
  }