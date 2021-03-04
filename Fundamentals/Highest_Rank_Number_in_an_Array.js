/**
 * @Kata Highest Rank Number in an Array
 * @link https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/javascript
 * @Kyu 6
 * @Training Fundamentals
 * @date 2021-03-04
 * @author sunmon
 */

function highestRank(arr) {
  arr.sort((a, b) => b - a);
  let maxCount = 0;
  let count = 1;
  let ret = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] === arr[i - 1] ? (count += 1) : (count = 1);
    if (count > maxCount) {
      maxCount = count;
      ret = arr[i];
    }
  }

  return ret;
}

// Clever
function highestRank(arr) {
  return arr.sort(
    (a, b) => arr.filter(i => i === b).length - arr.filter(i => i === a).length,
  )[0];
}
