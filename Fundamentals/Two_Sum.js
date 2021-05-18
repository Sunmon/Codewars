/**
 * @Kata The Vowel Code
 * @link https://www.codewars.com/kata/52c31f8e6605bcc646000082
 * @Kyu 6
 * @Training Fundamentals
 * @date 2021-05-13
 * @author sunmon
 */

function twoSum(numbers, target) {
  const sortedNums = numbers
    .map((el, i) => [el, i])
    .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));

  let i = 0;
  let j = numbers.length - 1;
  while (i < numbers.length && j >= 0) {
    const sum = sortedNums[i][0] + sortedNums[j][0];
    if (sum === target) {
      return [sortedNums[i][1], sortedNums[j][1]];
    }
    sum > target ? (j -= 1) : (i += 1);
  }
  return [0, 0];
}

// Best Pracitce
function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

// Clever
function twoSum(numbers, target) {
  var tmp,
    hash = {};
  numbers.forEach(function (a, i) {
    hash[a] = i;
  });

  for (var i = 0; i < numbers.length; i++) {
    tmp = target - numbers[i];
    if (typeof hash[tmp] !== 'undefined') return [i, hash[tmp]];
  }
}
