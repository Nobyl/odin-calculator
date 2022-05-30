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
    return (num1 / num2);
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