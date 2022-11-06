const display = document.querySelector('.display');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
const numBtn = document.querySelectorAll('.numBtn');
const opBtn = document.querySelectorAll('.opBtn');
const eqBtn = document.querySelector('#equals');
let selectedOperator = undefined;

const resetDisplay = () => {
  // Reset display screen
  display.textContent = "0";
}

const setDisplay = (value) => {
  // Set display screen value
  display.textContent = value;
}

const pushDisplay = (value) => {
  // Add value to display if screen is not full
  if (display.textContent.length < 13) {
    display.textContent = display.textContent.concat(value);
  };
}

const popDisplay = () => {
  // Remove last value from display screen
  if (display.textContent.length === 1) {
    resetDisplay();
  } else {
    display.textContent = display.textContent.slice(0,-1);
  }
}

const resetNumbers = () => {
  num1 = num2 = undefined;
}

const displayError = () => {
  display.textContent = "error";
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = function(operator,a,b) {
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
      return "error";
  }
}

const performCalc = () => {
  let calculated = (operate(selectedOperator, num1, num2)).toString();
  // Check if calculated value fits on display
  if (calculated.length < 13) {
    display.textContent = calculated;
    selectedOperator = undefined;
  } else {
    displayError();
  }
}

// Clear button clears display string
clearBtn.addEventListener('click', () => {
  resetDisplay();
  resetNumbers();
});

// Delete button removes last character from display string
deleteBtn.addEventListener('click', () => {
  popDisplay();
});

// Update display on number click
numBtn.forEach((button) => {
  button.addEventListener('click', () => {
    if (selectedOperator || num1) {
      resetDisplay();
    }
    
    if (display.textContent === "0") {
      setDisplay(button.id);
    } else {
      pushDisplay(button.id);
    }
  });
});

// Operator button functionality
opBtn.forEach((button) => {
  button.addEventListener('click', () => {
    selectedOperator = button.id;

    if (num1) {
      performCalc();
      num1 = parseInt(display.textContent);
    } else {
      num1 = parseInt(display.textContent);
    }
  });
});

eqBtn.addEventListener('click', () => {
  // Set second number for operation
  num2 = parseInt(display.textContent);
  performCalc();
  selectedOperator = undefined;
  num1 = parseInt(display.textContent);
});

// Set numbers and display on startup
resetNumbers();
resetDisplay();