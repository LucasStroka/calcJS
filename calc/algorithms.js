const sum = (a, b) => a + b;
const decrease = (a ,b) => a - b;
const multiplier = (a, b) => a * b;

function division(num1, num2) {
    if (num2 === 0) {
        console.log("Não se Pode Dividir por 0. ");
        return null;
    } else {
        return num1 / num2;
    }
}

module.exports = {
    sum,
    decrease,
    multiplier,
    division
}