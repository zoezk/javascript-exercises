const findTheOldest = function (arr) {
  let oldest = arr[0];
  arr.forEach((item, index) => {
    if (!item.yearOfDeath) item.yearOfDeath = new Date().getFullYear();
    if (
      item.yearOfDeath - item.yearOfBirth >=
      oldest.yearOfDeath - oldest.yearOfBirth
    )
      oldest = item;
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
