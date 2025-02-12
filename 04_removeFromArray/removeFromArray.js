const removeFromArray = function (arr, ...theArgs) {
  const newArr = [];
  for (const arg of theArgs) {
    const indices = [];
    let idx = arr.indexOf(arg);
    while (idx !== -1) {
      indices.push(idx);
      idx = arr.indexOf(arg, idx + 1);
    }
    indices.reverse();
    for (const index of indices) {
      arr.splice(index, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
