const display = document.querySelector(".display");
display.textContent = 0;

const backspaceButton = document.querySelector(".backspace-button");
backspaceButton.addEventListener("click", () => {
    if (1 < display.textContent.length) {
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    } else display.textContent = 0;
});

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => display.textContent = 0);

const numberButtons = Array.from(document.querySelectorAll(".number-button"));
numberButtons.forEach(numberButton => numberButton.addEventListener("click", () => {
    if (0 == display.textContent) display.textContent = numberButton.textContent;
    else display.textContent += numberButton.textContent;
}));

const operatorButtons = Array.from(document.querySelectorAll(".operator-button"));
operatorButtons.forEach(operatorButton => operatorButton.addEventListener("click", () => {
    let operator = getOperator();

    if (operator) operateCaller(operator, operatorButton.textContent);
    else display.textContent += operatorButton.textContent;
}));

const equalsButton = document.querySelector(".equals-button");
equalsButton.addEventListener("click", () => {
    let operator = getOperator();

    if (operator) operateCaller(operator);
});

const getOperator = function () {
    const operators = ["+", "-", "*", "/"];
    let result = null;

    operators.some(function (operator) {
        if (display.textContent.includes(operator)) {
            result = operator;
        };
    });

    return result;
};

const operateCaller = function (operator, buttonText = "") {
    let num1 = display.textContent.slice(0, display.textContent.indexOf(operator));
    let num2 = display.textContent.slice(display.textContent.indexOf(operator) + 1);

    if (num2) {
        display.textContent = operate(operator, Number(num1), Number(num2));
        
        if ("Cannot Divide by Zero" != display.textContent) display.textContent += buttonText;
    } else if ("=" != buttonText) {
        display.textContent = display.textContent.slice(0, display.textContent.indexOf(operator)) + buttonText;
    }
}

const operate = function(operator, num1, num2) {
    switch (operator) {
        case "+":
            return addition(num1, num2);
        case "-":
            return subtraction(num1, num2);
        case "*":
            return multiplication(num1, num2);
        case "/":
            return division(num1, num2);
    }
}

const addition = function (num1, num2) {
    return (num1 + num2);
}

const subtraction = function (num1, num2) {
    return (num1 - num2);
}

const multiplication = function (num1, num2) {
    return (num1 * num2);
}

const division = function (num1, num2) {
    if (0 == num2) return "Cannot Divide by Zero";

    return (num1 / num2);
}
