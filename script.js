let display = document.getElementById('display');
let currentValue = '0';

function appendToDisplay(value) {
    if (currentValue === '0' && value !== '.') {
        currentValue = value;
    } else {
        currentValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentValue = '0';
    updateDisplay();
}

function deleteLast() {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
        updateDisplay();
    } catch (error) {
        currentValue = 'Error';
        updateDisplay();
        setTimeout(() => {
            currentValue = '0';
            updateDisplay();
        }, 1500);
    }
}

function updateDisplay() {
    display.textContent = currentValue;
}