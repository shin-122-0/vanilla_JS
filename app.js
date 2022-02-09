const calculator = {
    plus: function(a, b, c, d) {
        return a + b + c + d ;
    },
    times: function(a, b) {
        return a * b;
    },
    minus: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    },
};

const plusResult = calculator.plus(2, 3, 1, 4);
const minusResult = calculator.minus(8, plusResult);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

console.log(plusResult);