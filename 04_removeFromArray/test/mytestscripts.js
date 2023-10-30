//Testing how to remove an item from an array

const testArray = [0, 1, 2, 3, 4, 5, 6];

function removeFromArray(array, ...remover) {
    console.log(array);
    console.log(...remover);
    array = array.filter((value) => !remover.includes(value));
    return array;
}
