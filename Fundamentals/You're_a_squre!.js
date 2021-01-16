/**
 * @Kata You're a square!
 * @link https://www.codewars.com/kata/54c27a33fb7da0db0100040e/javascript
 * @Kyu 7
 * @date 2021-01-16
 * @author sunmon
 */
var isSquare = function (n) {
  if (n <= 0) return n === 0;
  const s = Math.sqrt(n);
  return s === (s | 0);
};

// Best Practice 1
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// Best Pracitce 2
const isSquare = n => Number.isInteger(Math.sqrt(n));
