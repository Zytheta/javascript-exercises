//Trying to do the sum activity.
//First trying to make sure both inputs are numbers
//Initialize sum variable
//Sort numbers
//Function to add all the numbers together
//Return sum

let num1 = 4;
let num2 = 1;

function additionTool(num1, num2) {
    let sum = 0;//Goal sum
    function orderNumbers(a, b) {//Number ordering function
        return a - b;
    }
    console.log(num1);
    console.log(num2);
    if (isNaN(num1) === true) { //Check to see if both inputs are numbers
        return console.log('ERROR. Needs a number input.');
    } else if (isNaN(num2) === true) {
        return console.log('ERROR. Needs a number input.');
    } else {
        const set = Array.from([num1, num2]);//Make array from 2 numbers       
        console.log(set);
        const setOrdered = set.sort(orderNumbers);
        let minNumber = Math.min(...setOrdered);
        let maxNumber = Math.max(...setOrdered);
        console.log("Both are number inputs.");
        console.log(setOrdered); //Ordering the array
        console.log(minNumber);
        console.log(maxNumber);
        console.log(typeof minNumber);
        while (minNumber <= maxNumber) {
            sum = minNumber + sum;
            minNumber++;
        }
        return sum;
    }
}
