const label = document.querySelector('.label');
const addition = document.querySelector('#add');
const subtraction = document.querySelector('#subtract');
const multiplication = document.querySelector('#multiply');
const division = document.querySelector('#divide');

const allClear = document.querySelector('#clear');
allClear.addEventListener('click', () => label.textContent = '');

let firstNumber;
let secondNumber;
let operator;


const btn = document.querySelectorAll('.digit');
btn.forEach(btn => btn.addEventListener('click', () => {
    console.log(btn.textContent);
    label.textContent += btn.textContent;
}));

addition.addEventListener('click', () => operator = '+');
subtraction.addEventListener('click', () => operator = '-');
multiplication.addEventListener('click', () => operator = '*');
division.addEventListener('click', () => operator = '/');

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () => {
    firstNumber = label.textContent;
    label.textContent = '';
}));

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', () => operate());

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
    return sum;
}

function subtract(a, b) {
    let difference = a - b;
    console.log(difference);
    return difference;
}

function multiply(a, b) {
    let product = a * b;
    console.log(product);
    return product;
}

function divide(a, b) {
    let quotient = a / b;
    console.log(quotient);
    return quotient;
}