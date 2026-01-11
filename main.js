let num1 = null;  
let num2 = null;
let operator = "";


const add = (num1, num2) => num1 + num2; 
const subtract = (num1, num2) => num1 - num2; 
const multiply = (num1, num2) => num1 * num2; 
const divide = (dividend, divisor) => {
    return divisor != 0 ? dividend / divisor : "Error"
};  


function operate(operator, num1, num2) { 
    switch(operator) {
        case '+': 
            return add(num1, num2); 
        case '-': 
            return subtract(num1, num2); 
        case 'x': 
            return multiply(num1, num2); 
        case '/': 
            return divide(num1, num2)
    }
}

function updateNumbers() { 

    const displayContainer = document.querySelector(".display-container"); 
    const buttonContainer = document.querySelector(".button-container"); 

    buttonContainer.addEventListener("click", (event) => { 

        const target = event.target; 
        let value = target.textContent;

        if (!target.classList.contains("btn")) return;

        if (target.classList.contains("clear")) { 
            displayContainer.textContent = "0"; 
            num1 = null; 
            num2 = null;
            operator = ""; 
            return;
        }

        if (target.classList.contains("equals-to")) { 
            if (num1 !== null && num2 !== null && operator !== "") { 
                const result = operate(operator, parseFloat(num1), parseFloat(num2))

                displayContainer.textContent = result; 
                console.log(result)
                num1 = result; 
                num2 = null; 
                operator = "";
                return;
            }
        }

        if (target.classList.contains("number")) { 
            if (operator) { 
                displayContainer.textContent == "0" 
                ? displayContainer.textContent = value
                : displayContainer.textContent += value

                num2 = displayContainer.textContent
            } 
            else { 
                displayContainer.textContent == "0"
                ? displayContainer.textContent = value
                : displayContainer.textContent += value

                num1 = displayContainer.textContent
            }      
        } 

        if (target.classList.contains("operator")) {  
            displayContainer.textContent = "0"
            operator = value; 
        }
    

        console.log(num1)
        console.log(num2)
        console.log(operator)

    })

}

updateNumbers()