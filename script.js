const resetDisplay = () => {
  displayScreen.textContent = "0";
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = function(operator,a,b) {
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

const displayScreen = document.querySelector('.display');
const numBtn = document.querySelectorAll('.numBtn');
const opBtn = document.querySelectorAll('.opBtn');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');

// Set default display
resetDisplay();

// Clear button clears display string
clearBtn.addEventListener('click', () => {
  displayScreen.textContent = "";
});

// Delete button removes last character from display string
deleteBtn.addEventListener('click', () => {
  let displayContents = displayScreen.textContent;
  displayScreen.textContent = displayContents.slice(0,-1);
});

numBtn.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});