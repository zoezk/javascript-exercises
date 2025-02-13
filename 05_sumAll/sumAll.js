const sumAll = function (numOne, numTwo) {
  if (
    numOne < 0 ||
    numTwo < 0 ||
    !Number.isInteger(numOne) ||
    !Number.isInteger(numTwo)
  ) {
    return "ERROR";
  }

  const [start, end] = numOne < numTwo ? [numOne, numTwo] : [numTwo, numOne];
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
