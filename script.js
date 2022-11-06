const resetDisplay = () => {
  // Reset display screen
  display.textContent = "0";
};

const setDisplay = (value) => {
  // Set display screen value
  display.textContent = value;
}

const pushDisplay = (value) => {
  // Add value to display if screen is not full
  if (display.textContent.length < 13) {
    display.textContent = display.textContent.concat(value);
  };
};

const popDisplay = () => {
  // Remove last value from display screen
  if (display.textContent.length === 1) {
    resetDisplay();
  } else {
    display.textContent = display.textContent.slice(0,-1);
  }
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = function(operator,a,b) {
  // Operate on two input numbers based on an operator
  switch (operator) {
    case "+":
      return add(a,b);
    case "-":
      return subtract(a,b);
    case "*":
      return multiply(a,b);
    case "/":
      return divide(a,b);
    default:
      console.log("Invalid operator")
  }
};

const display = document.querySelector('.display');
const numBtn = document.querySelectorAll('.numBtn');
const opBtn = document.querySelectorAll('.opBtn');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');

// Set default display
resetDisplay();

// Clear button clears display string
clearBtn.addEventListener('click', () => {
  resetDisplay();
});

// Delete button removes last character from display string
deleteBtn.addEventListener('click', () => {
  popDisplay();
});

//
numBtn.forEach((button) => {
  button.addEventListener('click', () => {
    if (display.textContent === "0") {
      setDisplay(button.id);
    } else {
      pushDisplay(button.id);
    }
  });
});