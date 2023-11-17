const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numbers) {
	let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const multiply = function(numbers) {
  let product = 1;

  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
};

const power = function(number, power) {
	let answer = 1;
  for (let i = 0; i < power; i++) {
    answer *= number;
  }
  return answer;
};

const factorial = function(number) {
	let answer = 1;
  let counter = number;
  if (number === 0) {
    return 1 } else {
      for (let i = 0; i < counter; i++) {
      answer *= number;
      number--;
      }
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
