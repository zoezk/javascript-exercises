const convertToCelsius = function (fahrenheit) {
  const result = (fahrenheit - 32) * (5 / 9);
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  const result = (9 / 5) * celsius + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
