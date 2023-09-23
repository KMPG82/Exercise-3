class Calculator {
    constructor(output) {
        this.output = output
        this.clear();
    }

    inputNumber(number) {
        if (this.equation !== '') {
            //might need to cast both as a string then concatanate
            this.equation += number;
        }
        else {
            this.equation = number;
        }

    }

    clear() {
        this.equation = "";
        this.operation = undefined;
    }

    operationChoice(operation) {

    }

    calculate() {

    }

    update() {
        this.output.innerText = this.equation
    }
}

const buttonForNumber = document.querySelectorAll('[data-number]');
const buttonForOperator = document.querySelectorAll('[data-operation]');
const buttonForEqual = document.querySelector('[data-equal]');
const buttonForClear = document.querySelector('[data-clear]');
const output = document.querySelector('[data-output]');

const calculator = new Calculator(output);

buttonForNumber.forEach(button => {
    button.addEventListener('click', () => {
        calculator.inputNumber(button.innerText);
        calculator.update();
    })
})

buttonForOperator.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operationChoice(button.innerText);
        calculator.update();
    })
})

buttonForClear.forEach(button => {
    button.addEventListener('click', () => {
        calculator.clear();
        calculator.update();
    })
})