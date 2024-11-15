class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    operate(operation, a, b) {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            default:
                throw new Error("Invalid operation.");
        }
    }
}

// Example usage:
const calculator = new Calculator();
const a = 10;
const b = 5;

console.log(`Add: ${a} + ${b} = ${calculator.operate('add', a, b)}`);
console.log(`Subtract: ${a} - ${b} = ${calculator.operate('subtract', a, b)}`);
console.log(`Multiply: ${a} * ${b} = ${calculator.operate('multiply', a, b)}`);
console.log(`Divide: ${a} / ${b} = ${calculator.operate('divide', a, b)}`);