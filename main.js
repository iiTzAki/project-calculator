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
        case '×': 
            return multiply(num1, num2); 
        case '÷': 
            return divide(num1, num2)
    }
}

function handleCalculator() { 

    let resultFromOperate = null;
    let waitingForNewNumber = false;     
    const displayContainer = document.querySelector(".display-container"); 
    const buttonContainer = document.querySelector(".button-container"); 

    const manageClear = () => {
        displayContainer.textContent = "0"; 
        num1 = null; 
        num2 = null;
        operator = ""; 
        return;
    }

    const manageEqualsTo = () => { 
        if (num1 !== null && num2 !== null && operator !== "") { 

            resultFromOperate = operate(operator, parseFloat(num1), parseFloat(num2));
            displayContainer.textContent = resultFromOperate; 

            if (displayContainer.textContent == "NaN") {
                displayContainer.textContent = "Press AC"
            }

            num1 = resultFromOperate; 
            num2 = null; 
            operator = "";
            resultFromOperate = null;
            waitingForNewNumber = true;
            return;
        }
    }

    const calculate = () => { 
        return operate(operator, parseFloat(num1), parseFloat(num2))
    }

    buttonContainer.addEventListener("click", (event) => { 

        const target = event.target; 
        let value = target.textContent;

        if (!target.classList.contains("btn")) return;

        if (target.classList.contains("clear")) return manageClear();
        if (target.classList.contains("equals-to")) return manageEqualsTo();


        if (num1 !== null && num2 !== null && operator !== ""
             && target.classList.contains("operator")) {

            resultFromOperate = calculate();

            num1 = resultFromOperate; 
            num2 = null; 
            operator = value;
            displayContainer.textContent = resultFromOperate;
            waitingForNewNumber = true;
            return;
        }  
        else if (target.classList.contains("operator")) {  

            waitingForNewNumber = true;
            operator = value; 

        }        

        if (target.classList.contains("number")) { 

            if (value == "." && displayContainer.textContent.includes('.')) {
                return;
            }

            if (waitingForNewNumber) { 
                displayContainer.textContent = value;
                waitingForNewNumber = false; 
            } 
            else { 
                displayContainer.textContent === "0" 
                ? displayContainer.textContent = value 
                : displayContainer.textContent += value;
            }


            if (!operator) { 
                num1 = displayContainer.textContent;
            } else { 
                num2 = displayContainer.textContent;
            }
        } 

    })

}

handleCalculator()