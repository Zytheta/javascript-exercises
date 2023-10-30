const sumAll = function(num1, num2) {
    let sum = 0;//Goal sum
    function orderNumbers(a, b) {//Number ordering function
        return a - b;
    }
    if (isNaN(num1) === true) { //Check to see if both inputs are numbers
        return 'ERROR';
    } else if (isNaN(num2) === true) {
        return 'ERROR';
    } else if (num1 < 0) { //Check to see if both inputs are positive
        return 'ERROR';
    } else if (num2 < 0) {
        return 'ERROR';
    } else if (typeof num1 != 'number') {//Check to see if both are not text masquerading as numbers
        return 'ERROR';
    } else if (typeof num2 != 'number') {
        return 'ERROR';
    } else {
        const set = Array.from([num1, num2]);//Make array from 2 numbers       
        const setOrdered = set.sort(orderNumbers);
        let minNumber = Math.min(...setOrdered);
        let maxNumber = Math.max(...setOrdered);
        while (minNumber <= maxNumber) {
            sum = minNumber + sum;
            minNumber++;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
