var imputArray = [];
var numArray = [];

var result

for (let i = 2; i < process.argv.length; i++) {
    imputArray.push(process.argv[i]);
}

for (let i = 1; i < imputArray.length; i++) {
    numArray.push(parseInt(imputArray[i]));
}

var command = imputArray[0]; // needs to be put down here ass it is defined above

console.log(numArray);
console.log(imputArray);
console.log(command);

switch (command) {
    case 'add':

        var previousTotal = numArray[0]; //Inital number in array       

        numArray.forEach(function (number) {
            previousTotal = previousTotal + number; // for each number in array add to the previous number
        });

        result = previousTotal // Pushes end sum to result


        break;
    case 'subtract':

        var previousTotal = numArray[0]; //Inital number in array       

        numArray.forEach(function (number) {
            previousTotal = previousTotal - number; // for each number in array subtract to the previous number
        });

        result = previousTotal // Pushes end total to result

        break;
    case 'multiply':

        var previousTotal = numArray[0]; //Inital number in array       

        numArray.forEach(function (number) {
            previousTotal = previousTotal * number; // for each number in array multiply to the previous number
        });

        result = previousTotal // Pushes end total to result

        break;
    case 'divide':

    if (numArray.length < 2) {
        console.log("no numbers in array")
        break;
    }
    // previousTotal starts with 10
    var previousTotal = numArray[1]; 

    // start from the second number which is 2
    for (i = 2; i < numArray.length; i++) {
        if (numArray[i] === 0) {
            console.log("You canot divide by zero!");
        }
        else {
            previousTotal += previousTotal / numArray[i]; // for each number in array divide to the previous number
        }
    }
    result = previousTotal;
    // result will be (10/2)/5 = 1
    break;
        // for (i = 1; i < numArray.length; i++) {
        //     if (numArray[i] === 0) { // If any number besides the first is 0 spit out this
        //         consol.log("You canot divide by zero!");
        //     }
        //     else {
        //         var previousTotal = numArray[0]; //Inital number in array       

        //         for (i = 1; i < numArray.length; i++) {
        //             previousTotal = previousTotal / numArray[i]; // for each number in array divide to the previous number
        //         }
        //     }

        //     result = previousTotal // Pushes end total to result
        // }

        // break;
    case 'remainder':

        for (i = 1; i < numArray.length; i++) {
            if (numArray[i] === 0) {
                consol.log("You canot divide by zero!");
            }
            else {
                var previousTotal = numArray[0]; //Inital number in array       

                previousTotal = previousTotal % numArray[i]; // for each number in array divide to the previous number
            }

            result = previousTotal // Pushes end total to result
        }

        break;
    default:
        console.log("this is not a command!");
        break;
}



console.log("Result: " + result);