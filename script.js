function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 === 0) {
        num1 = "";
        num2 = "";
        operator = "";
        numOrder = true;
        screen.innerHTML = "IMPOSSIBLE!";
    }
    else {
        return num1 / num2;
    }
}

function operate(operator, num1, num2) {
    if(operator == "add") {
        return add(num1, num2);
    }
    else if(operator == "substract") {
        return substract(num1, num2);
    }
    else if(operator == "multiply") {
        return multiply(num1, num2);
    }
    else if(operator == "divide") {
        return divide(num1, num2);
    }
}
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('transitionend', removeTransition))

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener('click', numClick));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener('click', operatorClick));

const screen = document.querySelector(".screen");



let numOrder = true;
let num1 = "";
let num2 = "";
let operator = "";



function numClick(e) {
    if(numOrder) {
        num1 += this.id;
        screen.innerHTML = num1;
    }
    else{
        num2 += this.id;
        screen.innerHTML = num2;
    }
    this.classList.add("pressed");
}



function operatorClick(e) {
    if(this.id === "clear") {
        num1 = "";
        num2 = "";
        operator = "";
        numOrder = true
        screen.innerHTML = "0";
    }
    else if(this.id === "equals") {
        if(numOrder) return;
        else{
            num1 = operate(operator, parseInt(num1), parseInt(num2));
            screen.innerHTML = num1
            num1 = "";
            num2 = "";
            operator = "";
            numOrder = true
        }
    }
    else {
        if(numOrder){
            numOrder = false;
            operator = this.id;
        }
        else {
            num1 = operate(operator, parseInt(num1), parseInt(num2));
            screen.innerHTML = num1;
            operator = this.id;
            num2 = "";
        }

    }

    this.classList.add("pressed");
}



function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('pressed');
}
