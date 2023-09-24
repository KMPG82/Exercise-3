const numberButtons = document.querySelectorAll('[data-number]')
const operatornButtons = document.querySelectorAll('[data-operator]')
const display = document.querySelector('.display')
const equalButton = document.querySelector('[data-equal]')


let operand = '';
let inputNumbers = []; // organize input numbers
let inputOperators = []; //organize input operators
let operators = ['+', '-', 'x', '/'];

function addNumber(number) {
    display.innerText += number;
    operand += number;
    console.log(operand)
}

function addOperator(operator) {
    display.innerText += operator;
    inputNumbers.push(operand)
    operand = ''
    inputOperators.push(operator)
    console.log(inputNumbers)
    console.log(inputOperators)
}

function calculate() {
    inputNumbers.push(operand)
    inputNumbers.reverse()
    let ouput = 0;

    while (inputOperators.length !== 0) {
        if (inputOperators[0] == '+') {
            output = Number(inputNumbers[inputNumbers.length - 2]) + Number(inputNumbers[inputNumbers.length - 1]);
            inputOperators.pop();
            inputNumbers.pop()
            inputNumbers.pop()

            display.innerText =
        }
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => addNumber(button.innerText));
})

operatornButtons.forEach(button => {
    button.addEventListener('click', () => addOperator(button.innerText));
})

equalButton.addEventListener('click', () => calculate());
