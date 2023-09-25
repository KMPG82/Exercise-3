//selectors
const numberButtons = document.querySelectorAll('[data-number]')
const operatornButtons = document.querySelectorAll('[data-operator]')
const display = document.querySelector('.display')
const equalButton = document.querySelector('[data-equal]')
const clearButton = document.querySelector('[data-clear]')

//variables
let result = '';
let operand = ''
let input = [];

//add single digit to operand
function addNumber(number) {
    update(number);
    operand = operand.toString() + number.toString();
}

//add operator to input array
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
    }
}

//update the display
function update(value) {
    display.innerText += value;
}

//equal is inputted
function addEqual() {
    input.push(operand)
    operand = ''
    calculate()
}

//all calculations done here
function calculate() {
    //the one element that should be left is the result of the calculation
    while (input.length !== 1) {
        //do all multiplication and division first
        if (input.includes('x') || input.includes('/')) {
            let timesLocation = undefined;
            let divideLocation = undefined;

            if (input.includes('x')) { //if there is a times op, find its index
                timesLocation = input.indexOf('x', 0);
            }
            else { //no times ops
                timesLocation = -1
            }

            if (input.includes('/')) { //if there is a division op, find its index
                divideLocation = input.indexOf('/', 0);
            }
            else { //no divison ops
                divideLocation = -1
            }

            if (divideLocation === -1) { //no division ops
                input[timesLocation - 1] = (parseFloat(input[timesLocation - 1]) * parseFloat(input[timesLocation + 1])).toString();
                input.splice(timesLocation, 2);
            } else if (timesLocation === -1) { //no times ops
                input[divideLocation - 1] = (parseFloat(input[divideLocation - 1]) / parseFloat(input[divideLocation + 1])).toString();
                input.splice(divideLocation, 2);
            } else if (timesLocation < divideLocation) { //times comes before divide
                input[timesLocation - 1] = (parseFloat(input[timesLocation - 1]) * parseFloat(input[timesLocation + 1])).toString();
                input.splice(timesLocation, 2);
            }
            else if (divideLocation < timesLocation) { //divide comes before times
                input[divideLocation - 1] = (parseFloat(input[divideLocation - 1]) / parseFloat(input[divideLocation + 1])).toString();
                input.splice(divideLocation, 2);
            }
        }
        else { //do all add and sub after
            let plusLocation = undefined;
            let minusLocation = undefined;

            if (input.includes('+')) { //if there is a plus op, find its index
                plusLocation = input.indexOf('+', 0);
            }
            else { //no plus ops
                plusLocation = -1
            }

            if (input.includes('-')) { //if there is a minus op, find its index
                minusLocation = input.indexOf('-', 0);
            }
            else { //no minus ops
                minusLocation = -1
            }

            if (minusLocation === -1) { //no minus ops
                input[plusLocation - 1] = (parseFloat(input[plusLocation - 1]) + parseFloat(input[plusLocation + 1])).toString();
                input.splice(plusLocation, 2)
            } else if (plusLocation === -1) { //no plus ops
                input[minusLocation - 1] = (parseFloat(input[minusLocation - 1]) - parseFloat(input[minusLocation + 1])).toString();
                input.splice(minusLocation, 2)
            } else if (plusLocation < minusLocation) { //plus comes before minus
                input[plusLocation - 1] = (parseFloat(input[plusLocation - 1]) + parseFloat(input[plusLocation + 1])).toString();
                input.splice(plusLocation, 2)
            }
            else if (minusLocation < plusLocation) { //minus comes before plus
                input[minusLocation - 1] = (parseFloat(input[minusLocation - 1]) - parseFloat(input[minusLocation + 1])).toString();
                input.splice(minusLocation, 2)
            }
        }
    }

    //display the result
    display.innerText = '';
    result = input[0];
    update(result)
}

//clear input and display
function clear() {
    display.innerText = '';
    input = [];
}

//add event for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => addNumber(button.innerText));
})

//add event for operator buttons
operatornButtons.forEach(button => {
    button.addEventListener('click', () => addOperator(button.innerText));
})

//add event for equal button
equalButton.addEventListener('click', () => {
    addEqual(equalButton.innerText)
})

//add event for clear button
clearButton.addEventListener('click', () => {
    clear()
})
