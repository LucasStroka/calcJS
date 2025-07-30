function verifyNumbers(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return true;
    } else {
        console.log("Não São Numeros!");
        return false;
    }
}

module.exports = verifyNumbers;
