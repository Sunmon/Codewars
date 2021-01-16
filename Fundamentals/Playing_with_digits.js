/**
 * @Kata Playing with digits
 * @link https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
 * @Kyu 6
 * @date 2021-01-16
 * @author sunmon
 */

function digPow(n, p) {
  const nums = n.toString().split('').map(Number);
  const list = nums.map((n, i) => Math.pow(n, p + i));
  const sum = list.reduce((sum, cur) => sum + cur, 0);
  const k = sum / n;
  return Number.isInteger(k) ? k : -1;
}

// Best Practices
function digPow(n, p) {
  var x = String(n)
    .split('')
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}
