function add(a, b) {
    return a + b;

}

function subtract(a, b) {
    return a - b;

}

function multiply(a, b) {
    return a * b;

}

function divide(a, b) {
    return a / b;

}

function operate(a, b, operator) {
    if (operator == 'add') {
        add(a, b);
        console.log(add(a, b));
    } else if (operator == 'sub') {
        subtract(a, b);
    } else if (operator == 'mult') {
        multiply(a, b);
    } else if (operator == 'div') {
        divide(a, b);
    }

}