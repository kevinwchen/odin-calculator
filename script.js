const display = document.querySelector('.display');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
const numBtn = document.querySelectorAll('.numBtn');
const opBtn = document.querySelectorAll('.opBtn');
const eqBtn = document.querySelector('#equals');
let selectedOperator = undefined;
let lastClick = undefined;

const setDisplay = (value) => {
  // Set display screen value
  display.textContent = value;
}

const resetDisplay = () => {
  // Reset display screen
  setDisplay(0);
}

const pushDisplay = (value) => {
  // Add value to display if screen is not full
  if (display.textContent.length < 13) {
    setDisplay(display.textContent.concat(value));
  }
}

const popDisplay = () => {
  // Remove last value from display screen
  if (display.textContent.length === 1) {
    resetDisplay();
  } else {
    setDisplay(display.textContent.slice(0, -1));
  }
}

const resetMemory = () => {
  num1 = num2 = selectedOperator = undefined;
}

const displayError = () => {
  resetMemory();
  setDisplay("Overflow");
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = function(operator, a, b) {
  // Operate on two input numbers based on an operator
  switch (operator) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      return "op error";
  }
}

const performCalc = () => {
  let calculated = operate(selectedOperator, num1, num2);
  let calculatedString = calculated.toString();
  // Check if calculated value fits on display
  if (calculatedString.length < 13) {
    setDisplay(calculatedString); // Typical calculated value
  } else if (Math.round(calculated) <= 9999999999999 && calculated >= 0.000000000001) {
    setDisplay(calculatedString.slice(0, 13)); // Calculated value with decimal points
  } else {
    displayError();
  }
}

// Clear button clears display string
clearBtn.addEventListener('click', () => {
  resetDisplay();
  resetMemory();
  lastClick = "clear";
});

// Delete button removes last character from display string
deleteBtn.addEventListener('click', () => {
  popDisplay();
  lastClick = "delete";
});

// Update display on number click
numBtn.forEach((button) => {
  button.addEventListener('click', () => {
    if (lastClick === "operator" || lastClick === "equals") {
      resetDisplay();
    }
    
    if (display.textContent === "0") {
      setDisplay(button.id);
    } else {
      pushDisplay(button.id);
    }
    lastClick = "number";
  });
});

// Operator button functionality
opBtn.forEach((button) => {
  button.addEventListener('click', () => {
    if (lastClick === "number" && num1) {
      num2 = parseFloat(display.textContent);
      performCalc();
      num1 = parseFloat(display.textContent);
      num2 = undefined;
    } else if (lastClick === "number") {
      num1 = parseFloat(display.textContent);
    }
    selectedOperator = button.id;
    lastClick = "operator";
  });
});

// Equals button functionality
eqBtn.addEventListener('click', () => {
  if (selectedOperator && num1) {
    if (lastClick === "equals") {
      performCalc();
      num1 = parseFloat(display.textContent);
    } else {
      num2 = parseFloat(display.textContent);
      performCalc();
      num1 = parseFloat(display.textContent);
    }
  }
  lastClick = "equals";
});

// Set numbers and display on startup
resetMemory();
resetDisplay();