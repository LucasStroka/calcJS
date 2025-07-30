const prompt = require("prompt-sync")();
const verifyNumbers = require("./calc/verifyNum");
const calc = require("./calc/calc")

let num1 = parseFloat(prompt(`Digite o Primeiro Numero: `))
let operator = prompt(`Digite o Operador (+ - * /): `)
let num2 = parseFloat(prompt(`Digite o Segundo Numero: `))


if (verifyNumbers(num1, num2)) {
    console.log(`Resultado: ${calc(num1, num2, operator)}`);
}




