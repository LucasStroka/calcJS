const { sum , decrease, multiplier, division } = require("./algorithms")

function calculadora(num1, num2, operator) {
    switch (operator) {
        case "+":
            return sum(num1, num2)
        case "-":
            return decrease(num1, num2)
        case "*":
            return multiplier(num1, num2)
        case "/":
            return division(num1, num2)
        default:
            console.log(`Operador Não Identificado...`);
            break;
    }
}

module.exports = calculadora;