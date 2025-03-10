const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((total, currentNumber) => total * currentNumber, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
