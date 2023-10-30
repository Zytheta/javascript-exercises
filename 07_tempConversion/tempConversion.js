const convertToCelsius = function(tempFahrenheit) {
  let convertedCelsius = 0;
  convertedCelsius = ((tempFahrenheit - 32) * 5 / 9);
  const convert = (convertedCelsius) => (Math.round(convertedCelsius * 10)) / 10;
  return convert(convertedCelsius);
  };

const convertToFahrenheit = function(tempCelsius) {
  let convertedFahrenheit = 0;
  convertedFahrenheit = ((tempCelsius * 9 / 5 + 32))
  const revert = (convertedFahrenheit) => (Math.round(convertedFahrenheit * 10)) / 10;
  return revert(convertedFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
