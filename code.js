let firstNumber;
let secondNumber;
let operator;
let operatorClicked = false;
let equalClicked = false;
let numberOfTimesOperatorClicked = 0;
let currentTotal = 0;

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
allClear.addEventListener('click', () => {
    clearLabel()
    numberOfTimesOperatorClicked = 0;
    firstNumber = 0;
    secondNumber = 0;
    operatorClicked = false;
    equalClicked = false;
});

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
    if (operatorClicked === true || equalClicked === true) {
        return;
    }
    if (numberOfTimesOperatorClicked === 0) {
        firstNumber = label.textContent;
    } else {
        secondNumber = label.textContent;
        operate();
    }
    firstNumber = label.textContent;
    operatorClicked = true;
    numberOfTimesOperatorClicked++;
}

// first time operator is pressed, first number is the input
// after that, second number is input

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', () => {
    if (operatorClicked === true) {
        return;
    }
    if (equalClicked === false) {
        operate();
    }
    equalClicked = true;
});

function clearLabel() {
    label.textContent = '';
}

function labelDisplay(display) {
    label.textContent = display;
}

function operate() {
    equalClicked = false;
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
    currentTotal = sum;
    firstNumber = currentTotal;
}

function subtract(a, b) {
    let difference = a - b;
    console.log(difference);
    labelDisplay(difference);
    currentTotal = difference;
    firstNumber = currentTotal;
}

function multiply(a, b) {
    let product = a * b;
    console.log(product);
    labelDisplay(product);
    currentTotal = product;
    firstNumber = currentTotal;
}

function divide(a, b) {
    let quotient = a / b;
    console.log(quotient);
    labelDisplay(quotient);
    currentTotal = quotient;
    firstNumber = currentTotal;
}