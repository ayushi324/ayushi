let currentNumber = '';
let previousNumber = '';
let operator = null;

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function chooseOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        compute();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function compute() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result;
    operator = null;
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentNumber || '0';
}
