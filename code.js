let firstNumber;
let secondNumber;
let operator;
let nextOperator;
let operatorClicked = false;
let equalClicked = false;
let numberOfTimesOperatorClicked = 0;
let currentTotal = 0;


const label = document.querySelector('.label');
label.textContent = '0';

const btn = document.querySelectorAll('.digit');
btn.forEach(btn => btn.addEventListener('click', () => {
    if (operatorClicked === true || Number(label.textContent) === 0) {
        clearLabel();
    }
    if (label.textContent.toString().length === 10) {
        return;
    }
    resetOrangeButtons();
    operatorClicked = false;
    equalClicked = false;
    label.textContent += btn.textContent;
}));

const allClear = document.querySelector('#clear');
allClear.addEventListener('click', () => {
    label.textContent = '0';
    resetOrangeButtons();
    numberOfTimesOperatorClicked = 0;
    firstNumber = 0;
    secondNumber = 0;
    operatorClicked = false;
    equalClicked = false;
});

const posNeg = document.querySelector('#positivenegative');
posNeg.addEventListener('click', () => {
    label.textContent = Number(label.textContent) * -1;
});

const percentage = document.querySelector('#percentage');
percentage.addEventListener('click', () => {
    label.textContent = Number(label.textContent) / 100;
});

const addition = document.querySelector('#add');
addition.addEventListener('click', () => nextOperator = '+');

const subtraction = document.querySelector('#subtract');
subtraction.addEventListener('click', () => nextOperator = '-');

const multiplication = document.querySelector('#multiply');
multiplication.addEventListener('click', () => nextOperator = '*');

const division = document.querySelector('#divide');
division.addEventListener('click', () => nextOperator = '/');

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () => {
    resetOrangeButtons();
    operator.style.background = 'white';
    operatorPressed();
}));

function resetOrangeButtons() {
    operators.forEach(operator => operator.style.background = 'orange');
}

function operatorPressed() {
    if (operatorClicked === true) {
        operator = nextOperator;
        return;
    }
    if (numberOfTimesOperatorClicked < 1) {
        firstNumber = label.textContent;
        operator = nextOperator;
        // pass to operate function with operator
        // right now, code is taking most recent operator pressed and doing the math 
            // with that operator, but it should be using the original operator pressed first

        // I can try placing the operator event listeners under the call to the operate function
    } else {
        secondNumber = label.textContent;
        operate();
        operator = nextOperator;
    }

    operatorClicked = true;
    numberOfTimesOperatorClicked++;
}

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', () => equalButtonPressed());

function equalButtonPressed() {
    if (operatorClicked === true) {
        return;
    }
    if (equalClicked === false) {
        operatorClicked = false;
        operate();
    }
    firstNumber = label.textContent;
    equalClicked = true;
    operatorClicked = false;
    numberOfTimesOperatorClicked = 0;
}

function clearLabel() {
    label.textContent = '';
}

function labelDisplay(display) {
    if (display.toString().length <= 10) {
        label.textContent = display;
    } else {
        label.textContent = 'OVERFLOW';
    }
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

    equalClicked = false;
    operatorClicked = true;
}

function add(a, b) {
    let sum = Number(a) + Number(b);
    labelDisplay(sum);
    currentTotal = sum;
    firstNumber = currentTotal;
}

function subtract(a, b) {
    let difference = a - b;
    labelDisplay(difference);
    currentTotal = difference;
    firstNumber = currentTotal;
}

function multiply(a, b) {
    let product = a * b;
    labelDisplay(product);
    currentTotal = product;
    firstNumber = currentTotal;
}

function divide(a, b) {
    console.log(b);
    if (Number(b) === 0) {
        label.textContent = 'ERROR';
        return;
    }
    let quotient = a / b;
    labelDisplay(quotient);
    currentTotal = quotient;
    firstNumber = currentTotal;
}