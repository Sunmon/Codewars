/**
 * @Kata Reversed Strings
 * @link https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
 * @Kyu 8
 * @date 2021-01-13
 * @author sunmon
 */

function solution(str) {
  const arr = Array.from(str);
  return arr.reverse().join('');
}

// Best Practice 1
function bestPractice1(str) {
  return str.split('').reverse().join('');
}

// Best Practice 2
function bestPractice2(str) {
  return [...str].reverse().join('');
}
