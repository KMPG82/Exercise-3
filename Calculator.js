const numberButtons = document.querySelectorAll('[data-number]')
const operatornButtons = document.querySelectorAll('[data-operator]')
const display = document.querySelector('.display')
const equalButton = document.querySelector('[data-equal]')
const clearButton = document.querySelector('[data-clear]')

let result = '';
let operand = ''
let input = [];

function addNumber(number) {
    update(number);
    operand = operand.toString() + number.toString();
    console.log(input)
}

function addOperator(operator) {
    if (operand === '') {
        update(operator);
        input.push(operator)
    }
    else {
        update(operator);
        input.push(operand)
        operand = ''
        input.push(operator)
        console.log(input)
    }
}


function update(value) {
    display.innerText += value;
}

function addEqual(equal) {
    input.push(operand)
    operand = ''
    console.log(input)
    calculate()
}

function calculate() {
    while (input.length !== 1) {
        console.log(input)
        if (input.includes('x') || input.includes('/')) {
            let timesLocation = undefined;
            let divideLocation = undefined;
            console.log(input)

            if (input.includes('x')) {
                timesLocation = input.indexOf('x', 0);
            }
            else {
                timesLocation = -1
            }

            if (input.includes('/')) {
                divideLocation = input.indexOf('/', 0);
            }
            else {
                divideLocation = -1
            }

            if (divideLocation === -1) { //no minus signs
                input[timesLocation - 1] = (parseFloat(input[timesLocation - 1]) * parseFloat(input[timesLocation + 1])).toString();
                input.splice(timesLocation, 2);
                console.log(input)
            } else if (timesLocation === -1) { //no plus signs
                input[divideLocation - 1] = (parseFloat(input[divideLocation - 1]) / parseFloat(input[divideLocation + 1])).toString();
                input.splice(divideLocation, 2);
                console.log(input)
            } else if (timesLocation < divideLocation) {
                input[timesLocation - 1] = (parseFloat(input[timesLocation - 1]) * parseFloat(input[timesLocation + 1])).toString();
                input.splice(timesLocation, 2);
                console.log(input)
            }
            else if (divideLocation < timesLocation) {
                input[divideLocation - 1] = (parseFloat(input[divideLocation - 1]) / parseFloat(input[divideLocation + 1])).toString();
                input.splice(divideLocation, 2);
                console.log(input)
            }
        }
        else {
            let plusLocation = undefined;
            let minusLocation = undefined;

            if (input.includes('+')) {
                plusLocation = input.indexOf('+', 0);
            }
            else {
                plusLocation = -1
            }

            if (input.includes('-')) {
                minusLocation = input.indexOf('-', 0);
            }
            else {
                minusLocation = -1
            }

            if (minusLocation === -1) { //no minus signs
                input[plusLocation - 1] = (parseFloat(input[plusLocation - 1]) + parseFloat(input[plusLocation + 1])).toString();
                input.splice(plusLocation, 2)
                console.log(input)
            } else if (plusLocation === -1) { //no plus signs
                input[minusLocation - 1] = (parseFloat(input[minusLocation - 1]) - parseFloat(input[minusLocation + 1])).toString();
                input.splice(minusLocation, 2)
                console.log(input)
            } else if (plusLocation < minusLocation) {
                input[plusLocation - 1] = (parseFloat(input[plusLocation - 1]) + parseFloat(input[plusLocation + 1])).toString();
                input.splice(plusLocation, 2)
                console.log(input)
            }
            else if (minusLocation < plusLocation) {
                input[minusLocation - 1] = (parseFloat(input[minusLocation - 1]) - parseFloat(input[minusLocation + 1])).toString();
                input.splice(minusLocation, 2)
                console.log(input)
            }
        }
    }
    display.innerText = '';
    result = input[0];
    update(result)
}

function clear() {
    display.innerText = '';
    input = [];
}

//add events
numberButtons.forEach(button => {
    button.addEventListener('click', () => addNumber(button.innerText));
})

operatornButtons.forEach(button => {
    button.addEventListener('click', () => addOperator(button.innerText));
})

equalButton.addEventListener('click', () => {
    addEqual(equalButton.innerText)
})

clearButton.addEventListener('click', () => {
    clear()
})
