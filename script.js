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
        solution = add(a, b);
    } else if (operator == 'sub') {
        solution = subtract(a, b);
    } else if (operator == 'mult') {
        solution = multiply(a, b);
    } else if (operator == 'div') {
        solution = divide(a, b);
    }
    return solution;
}

let num, operate1;

const buttons = document.querySelectorAll('button');

buttons.forEach(addEvent);

function addEvent(a) {
    a.addEventListener('click', display);
    
}

function display() {
    const press = document.getElementById('display');
    press.textContent = this.textContent;
    
    if (num)
    if (this.id == 'plus' || this.id == 'sub' || this.id =='mult' || this.id =='divi'||this.id=='equal'){
        operate1 = this.id;


    }
    else if(this.id =='clear'){
        press.textContent = '0';

    }
    else{
        num = this.textContent;
        

    }

}

