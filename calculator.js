
function isNumber(num) {
    return typeof num === "number" ? true : false;
}

function add(a,b) {
    if (isNumber(a) && isNumber(b)) {
        return a+b;
    }
    else{
        return "Arguments contain a non-number";
    }
}

function subtract(a,b) {
    if (isNumber(a) && isNumber(b)) {
        return a-b;
    }
    else{
        return "Arguments contain a non-number";
    }
}

function divide(a,b) {
    if (isNumber(a) && isNumber(b)) {
        return a/b;
    }
    else{
        return "Arguments contain a non-number";
    }
}

function multiply(a,b) {
    if (isNumber(a) && isNumber(b)) {
        return a*b;
    }
    else{
        return "Arguments contain a non-number";
    }
}

const calculator = {
    add,
    subtract,
    divide,
    multiply,
};

module.exports = calculator;