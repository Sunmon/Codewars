/**
 * @Kata Multiplication Table
 * @link https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/
 * @Kyu 6
 * @Training Fundamentals
 * @date 2021-04-07
 * @author sunmon
 */

multiplicationTable = function (size) {
  return [...Array(size)].map((arr, i) =>
    [...Array(size)].map((a, j) => (i + 1) * (j + 1)),
  );
};

// Best Practice
multiplicationTable = function (size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for (var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }

  return result;
};

// Clever
multiplicationTable = function (size) {
  return Array.apply(null, new Array(size)).map(function (val, i) {
    return Array.apply(null, new Array(size)).map(function (val, j) {
      return (i + 1) * (j + 1);
    });
  });
};
