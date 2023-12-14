const palindromes = function (text) {
    const cleanText = text.replace(/[^\w]|_/g, '').toLowerCase();
    const characters = [...cleanText];
    const textCharacters = characters.join();
    console.log(textCharacters);
    const palindromeCharacters = [...cleanText].reverse();
    const palindrome = palindromeCharacters.join();
    console.log(palindrome);
    if (textCharacters === palindrome) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
