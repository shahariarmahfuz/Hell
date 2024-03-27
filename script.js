const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  // ...
}

function inputDecimal(dot) {
  // ...
}

function handleOperator(nextOperator) {
  // ...
}

function clearCalculator() {
  // ...
}

function updateScreen() {
  // ...
}

document.addEventListener('DOMContentLoaded', () => {
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.matches('button')) {
      return;
    }

    if (target.classList.contains('operator'))
