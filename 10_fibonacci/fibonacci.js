const fibonacci = function(lengthOfFibonacci) {
    const intChange = parseInt(lengthOfFibonacci);
    if (intChange === 0) {
        return 0;
    } else if (intChange === 1) {
        return 1;
    } else if (intChange < 0) {
        return "OOPS";
    } else {
        let previous = 0;
        let current = 1;
        let result = 0;
        for (let i = 2; i <= intChange; i++) {
            result = previous + current;
            previous = current;
            current = result;
        }
        return result
    }
};

// Do not edit below this line
module.exports = fibonacci;
