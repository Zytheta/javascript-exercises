/* We are doing two things 1 getting an array and 2 removing components of it
We then need to return the new array.
*/

const removeFromArray = function(array, ...remover) {
    array = array.filter((value) => !remover.includes(value));
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
