let firstNumber;
let secondNumber;
let operator;
let nextOperator;
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
    equalClicked = false;
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
addition.addEventListener('click', () => nextOperator = '+');

const subtraction = document.querySelector('#subtract');
subtraction.addEventListener('click', () => nextOperator = '-');

const multiplication = document.querySelector('#multiply');
multiplication.addEventListener('click', () => nextOperator = '*');

const division = document.querySelector('#divide');
division.addEventListener('click', () => nextOperator = '/');

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () => operatorPressed()));

function operatorPressed() {
    if (operatorClicked === true) {
        operator = nextOperator;
        return;
    }
    if (numberOfTimesOperatorClicked < 1) {
        firstNumber = label.textContent;
        operator = nextOperator;
        console.log(secondNumber);
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
    console.log(numberOfTimesOperatorClicked);
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

    equalClicked = false;
    operatorClicked = true;
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