const reverseString = function(string) {
    let reverseString = "";
    let lastSlice = "";
    let stringLength = string.length;
    while (stringLength > 0) {
        lastSlice = string.slice(-1);  //Grab the last letter
        reverseString = reverseString + lastSlice //Put it on the string
        string = string.slice(0, stringLength -1); //Get new string
        stringLength = string.length; //Get new string length
        }
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
