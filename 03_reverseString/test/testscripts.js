// Testing to see if we can manipulate some STRINGZZZ

let testString = "Hello"; // This is the string parameter
let lastSlice = "";
let reverseString = "";
let testStringLength = testString.length;

function lastStringCharacter() {
    while (testStringLength > 0) {
    console.log(testStringLength);
    lastSlice = testString.slice(-1);
    reverseString = reverseString + lastSlice
    testString = testString.slice(0, testStringLength -1);
    console.log(lastSlice);
    console.log(testString);
    console.log(reverseString);
    testStringLength = testString.length;
    console.log(testStringLength);
    }
    return reverseString
}

lastStringCharacter(testString)

/*

reverseString = function(string) {
    let reverseString = "";
    const stringLength = string.length;
    while (stringLength > 0) {
        reverseString = reverseString + string.slice(-1);
        string.prototype.pop(string);
        string = string.length;
    }
    return reverseString
}
*/
