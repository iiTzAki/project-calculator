function add(num1, num2) { 
    return num1 + num2;
};

function subtract(num1, num2) { 
    return num1 - num2;
};

function multiply(num1, num2) { 
    return num1 * num2; 
};

function divide(dividend, divisor) { 
    return divisor != 0 ? dividend / divisor : "Error"; 
}; 

let num1;  
let num2;
let operator; 

function operate(operator, num1, num2) { 
    switch(operator) {
        case '+': 
            return add(num1, num2); 
        case '-': 
            return subtract(num1, num2); 
        case '*': 
            return multiply(num1, num2); 
        case '/': 
            return divide(num1, num2)
    }
}