let firstNumber;
let secondNumber;
let operator;
let operatorClicked = false;

const label = document.querySelector('.label');

const btn = document.querySelectorAll('.digit');
btn.forEach(btn => btn.addEventListener('click', () => {
    if (operatorClicked === true) {
        clearLabel();
    }
    operatorClicked = false;
    console.log(btn.textContent);
    label.textContent += btn.textContent;
}));

const allClear = document.querySelector('#clear');
allClear.addEventListener('click', () => clearLabel());

const addition = document.querySelector('#add');
addition.addEventListener('click', () => operator = '+');

const subtraction = document.querySelector('#subtract');
subtraction.addEventListener('click', () => operator = '-');

const multiplication = document.querySelector('#multiply');
multiplication.addEventListener('click', () => operator = '*');

const division = document.querySelector('#divide');
division.addEventListener('click', () => operator = '/');

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () => operatorPressed()));

function operatorPressed() {
    firstNumber = label.textContent;
    operatorClicked = true;
}

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', () => operate());

function clearLabel() {
    label.textContent = '';
}

function labelDisplay(display) {
    label.textContent = display;
}

function operate() {
    secondNumber = label.textContent;
    if (operator === '+') {
        add(firstNumber,secondNumber);
    } else if (operator === '-') {
        subtract(firstNumber,secondNumber);
    } else if (operator === '*') {
        multiply(firstNumber,secondNumber);
    } else if (operator === '/') {
        divide(firstNumber,secondNumber);
    }
}

function add(a, b) {
    let sum = Number(a) + Number(b);
    console.log(sum);
    labelDisplay(sum);
    return sum;
}

function subtract(a, b) {
    let difference = a - b;
    console.log(difference);
    labelDisplay(difference);
    return difference;
}

function multiply(a, b) {
    let product = a * b;
    console.log(product);
    labelDisplay(product);
    return product;
}

function divide(a, b) {
    let quotient = a / b;
    console.log(quotient);
    labelDisplay(quotient);
    return quotient;
}