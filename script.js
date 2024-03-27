const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    currentNumber += number;
    display.textContent = currentNumber;
}

function chooseOperator(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

// (Add functions for calculation logic, clear button, etc.)

numberButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent));
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => chooseOperator(button.textContent));
});
