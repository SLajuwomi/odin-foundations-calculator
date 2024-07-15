let displayValue = 0;
let firstNumber = null;
let secondNumber = 0;
let operator = "";

let input = document.getElementById("current-operand");
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    inputNumber(button.innerHTML);
    updateDisplay();
  });
});

function inputNumber(number) {
  if (firstNumber === null) {
    if (displayValue === "0" || displayValue === 0) {
      displayValue = number;
    } else if (displayValue === firstNumber) {
      displayValue = number;
    } else {
      displayValue += number;
    }
  }
}

function updateDisplay() {
  input.innerText = displayValue;
}

function operate(a, b, operation) {
  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
