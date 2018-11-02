// This is defined as all imput like so: [(command), (num1), (num2), (num3), ...]
var imputArray = [];
var numArray = [];

var result

for (let i = 2; i < process.argv.length; i++) {
    imputArray.push(process.argv[i]);
}

for (let i = 1; i < imputArray.length; i++) {
    numArray.push(parseInt(imputArray[i]));
}

const command = imputArray[0]; // needs to be put down here as it is defined above

console.log(numArray);
console.log(imputArray);
console.log(command);

switch (command) {
    case 'add':
        result = numArray.reduce((a, b) => a / b);
        if (isNaN(result)) {
            console.log("Undefined!");
        } else if (numArray.length < 2) {
            console.log("no numbers in array");
        } else {
            console.log(`Result is ${result}`);
        }
        break;
    case 'subtract':
        result = numArray.reduce((a, b) => a - b);
        if (isNaN(result)) {
            console.log("Undefined!");
        } else if (numArray.length < 2) {
            console.log("no numbers in array");
        } else {
            console.log(`Result is ${result}`);
        }
        break;
    case 'multiply':
        result = numArray.reduce((a, b) => a * b);
        if (isNaN(result)) {
            console.log("Undefined!");
        } else if (numArray.length < 2) {
            console.log("no numbers in array");
        } else {
            console.log(`Result is ${result}`);
        }

        break;
    case 'divide':
        result = numArray.reduce((a, b) => a / b);
        if (isNaN(result)) {
            console.log("Can't divide by zero!");
        } else if (numArray.length < 2) {
            console.log("no numbers in array");
        } else {
            console.log(`Result is ${result}`);
        }
        break;
    case 'remainder':
        result = numArray.reduce((a, b) => a % b);
        if (isNaN(result)) {
            console.log("Can't divide by zero!");
        } else if (numArray.length < 2) {
            console.log("no numbers in array");
        } else {
            console.log(`Result is ${result}`);
        }
        break;
    default:
        console.log("this is not a command!");
        break;
}

