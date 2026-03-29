const display = document.getElementById("display");

let current = "";
let previous = "";
let operator = null;

function updateDisplay(val) {
  display.innerText = val || "0";
}

function appendNumber(num) {
  current += num;
  updateDisplay(current);
}

function appendOperator(op) {
  if (!current) return;
  if (previous) calculate();
  operator = op;
  previous = current;
  current = "";
}

function calculate() {
  if (!previous || !current) return;
  let result;

  const a = parseFloat(previous);
  const b = parseFloat(current);

  if (operator === "+") result = a + b;
  if (operator === "-") result = a - b;
  if (operator === "*") result = a * b;
  if (operator === "/") result = a / b;

  current = result.toString();
  operator = null;
  previous = "";
  updateDisplay(current);
}

function clearDisplay() {
  current = "";
  previous = "";
  operator = null;
  updateDisplay("0");
}

function deleteLast() {
  current = current.slice(0, -1);
  updateDisplay(current);
}

function appendDecimal() {
  if (!current.includes(".")) {
    current += ".";
    updateDisplay(current);
  }
}

// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});