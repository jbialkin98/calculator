let firstNumber;
let secondNumber;
let currentTotal = 0;
let operator;
let nextOperator;
let operatorClicked = false;
let numberOfTimesOperatorClicked = 0;
let equalClicked = false;
let decimalUsed = false;
let numberOfTimesPercentageClicked = 0;

const label = document.querySelector('.label');
label.textContent = '0';

const btn = document.querySelectorAll('.digit');
btn.forEach(btn => btn.addEventListener('click', () => digitPressed(btn)));

function digitPressed(digit) {
        if (operatorClicked === true || label.textContent === '0' || equalClicked === true ||
            label.textContent === 'ERROR') {
            clearLabel();
        }
        if (label.textContent.toString().length === 11) {
            return;
        }
        if (label.textContent.toString().length > 7) {
            label.style.fontSize = '50px';
        } else if (label.textContent.toString().length <= 7) {
            label.style.fontSize = '65px';
        }
        resetOrangeButtons();
        operatorClicked = false;
        equalClicked = false;
        if (typeof digit === 'number') {
            label.textContent += digit;
        } else {
            label.textContent += digit.textContent;
        }
}

const allClear = document.querySelector('#clear');
allClear.addEventListener('click', () => clearFunc());

function clearFunc() {
    label.style.fontSize = '65px';
    label.textContent = '0';
    resetOrangeButtons();
    numberOfTimesOperatorClicked = 0;
    firstNumber = 0;
    secondNumber = 0;
    operatorClicked = false;
    equalClicked = false;
}

const posNeg = document.querySelector('#positiveNegative');
posNeg.addEventListener('click', () => {
    label.textContent = Number(label.textContent) * -1;
});

const percentage = document.querySelector('#percentage');
percentage.addEventListener('click', () => percentClickedFunc());

function percentClickedFunc() {
    if (numberOfTimesPercentageClicked > 0 || operatorClicked === true) {
        return;
    }
    label.textContent = Number(label.textContent) / 100;
    numberOfTimesPercentageClicked++;
}

const decimal = document.querySelector('#dot');
decimal.addEventListener('click', () => decimalClickedFunc());

function decimalClickedFunc() {
    if (equalClicked === true || operatorClicked === true) {
        return;
    }
    if (decimalUsed === false) {
        label.textContent += '.';
    }
    decimalUsed = true;
}

document.addEventListener('keypress', (e) => {
    let name = e.key;
    let code =  e.code;
    switch (name) {
        case '+':
        case '-':
        case '*':
        case '/':
            nextOperator = name;
            operatorPressed();
            turnPressedOperatorWhite(name);
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            digitPressed(Number(name));
            break;
        case '.':
            decimalClickedFunc();
            break;
        case '=':
        case 'Enter':
            equalButtonPressed();
            break;
        case '%':
            percentClickedFunc();
            break;
        case 'c':
        case 'C':
            clearFunc();
            break;
    }
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
    operatorPressed();
    turnPressedOperatorWhite(operator);
}));

function resetOrangeButtons() {
    operators.forEach(operator => operator.style.background = 'orange');
    operators.forEach(operator => operator.style.color = 'white');
}

function turnPressedOperatorWhite(pressedOperator) {
    resetOrangeButtons();
    switch (pressedOperator) {
        case '+':
            addition.style.background = 'white';
            addition.style.color = 'orange';
            break;
        case '-':
            subtraction.style.background = 'white';
            subtraction.style.color = 'orange';
            break;
        case '*':
            multiplication.style.background = 'white';
            multiplication.style.color = 'orange';
            break;
        case '/':
            division.style.background = 'white';
            division.style.color = 'orange';
            break;
        default:
            pressedOperator.style.background = 'white';
            pressedOperator.style.color = 'orange';
            break;
    }
}

function operatorPressed() {
    if (operatorClicked === true) {
        operator = nextOperator;
        return;
    }
    if (numberOfTimesOperatorClicked < 1) {
        firstNumber = label.textContent;
        operator = nextOperator;
    } else {
        secondNumber = label.textContent;
        operate();
        operator = nextOperator;
    }

    operatorClicked = true;
    decimalUsed = false;
    numberOfTimesOperatorClicked++;
    numberOfTimesPercentageClicked = 0;
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
    if (display.toString().length <= 11) {
        if (display.toString().length > 7) {
            label.style.fontSize = '50px';
        } else if (display.toString().length <= 7) {
            label.style.fontSize = '65px';
        }
        label.textContent = display;
    } else {
        display = Number(display.toExponential());
        display = display.toPrecision(4);
        label.textContent = display;
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
    decimalUsed = false;
    operatorClicked = true;
}

function add(a, b) {
    let sum = Number(a) + Number(b);
    sum = Math.round(sum * 1000000) / 1000000;
    labelDisplay(sum);
    currentTotal = sum;
    firstNumber = currentTotal;
}

function subtract(a, b) {
    let difference = a - b;
    difference = Math.round(difference * 1000000) / 1000000;
    labelDisplay(difference);
    currentTotal = difference;
    firstNumber = currentTotal;
}

function multiply(a, b) {
    let product = a * b;
    product = Math.round(product * 1000000) / 1000000;
    labelDisplay(product);
    currentTotal = product;
    firstNumber = currentTotal;
}

function divide(a, b) {
    if (Number(b) === 0) {
        label.textContent = 'ERROR';
        return;
    }
    let quotient = a / b;
    quotient = Math.round(quotient * 1000000) / 1000000;
    labelDisplay(quotient);
    currentTotal = quotient;
    firstNumber = currentTotal;
}