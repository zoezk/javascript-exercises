const palindromes = function (string) {
  console.log(
    string.replace(/[, !.]/g, "").toLowerCase(),
    string
      .replace(/[, !.]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
  return (
    string.replace(/[, !.]/g, "").toLowerCase() ===
    string
      .replace(/[, !.]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
};

// Do not edit below this line
module.exports = palindromes;
