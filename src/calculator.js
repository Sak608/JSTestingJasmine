
// function add(a, b){
//     return a + b;
// }

// function subtract(a, b){
//     return a - b;
// }

// module.exports = {add, subtract};

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(value) {
        this.result += value;
    }

    subtract(value) {
        this.result -= value;
    }

    getResult() {
        return this.result;
    }

    reset() {
        this.reset = 0;
    }
}

module.exports = Calculator;