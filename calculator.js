// built const for numbers, input, output, and operators
const calc = document.getElementById('calculator');
const input = document.getElementById('input');
const output = document.getElementById('output');

// lets me update input values as each button is pressed
let inputValues = '';

// function for updating the input box
function updateText(event) {
  // updates input field when event.target is a number or operator
  inputValues += event.target.textContent;
  input.textContent = inputValues;
}

// function to update output field when equal sign is pressed
// Double check to make sure that order of operations is working.
// I am pretty sure it is. 
function updateOutput(values, operations) {
  let total = values[0];
  for (let i = 0; i < values.length; i++) {
    if (operations[i] === '+') {
      total += values[i + 1];
    }
    if (operations[i] === '-') {
      total -= values[i + 1];
    }
    if (operations[i] === 'x') {
      total *= values[i + 1];
    }
    if (operations[i] === '/') {
      total /= values[i + 1];
    }
  }
  output.textContent=total;
  input.textContent="#";
  console.log(total);
}

function calculate() {
  let digits = 0;
  let values = [];
  let operations = [];
  document.addEventListener('click', e => {
    // holds each individual digit for the numbers
    // array holding actual numbers

    if (e.target.classList.contains('number')) {
      updateText(e);
      digits += e.target.textContent;
    }
    if (e.target.classList.contains('operator')) {
      updateText(e);
      values.push(parseInt(digits));
      operations.push(e.target.textContent);
      digits = 0;
      console.log(values);
      console.log(operations);
    }
    if (e.target.classList.contains('equal')) {
      values.push(parseInt(digits));
      console.log(values);
      updateOutput(values, operations);
      digits = 0;
      values = [];
      operations = [];
      inputValues = '';
    }
  });
}

calculate();
