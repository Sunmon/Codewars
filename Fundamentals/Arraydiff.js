/**
 * @Kata Array.Diff
 * @link https://www.codewars.com/kata/523f5d21c841566fde000009/
 * @Kyu 6
 * @Training Fundamentals
 * @date 2021-04-06
 * @author sunmon
 */

function arrayDiff(a, b) {
  return a.filter(val => !b.includes(val));
}

// best practice
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
