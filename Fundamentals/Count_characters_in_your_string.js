/**
 * @Kata Count characters in your string
 * @link https://www.codewars.com/kata/53368a47e38700bd8300030d
 * @Kyu 6
 * @Training Fundamentals
 * @date 2021-01-24
 * @author sunmon
 */

function count(string) {
  const ret = {};
  for (let i = 0; i < string.length; i++) {
    ret[string[i]] = ret[string[i]] + 1 || 1;
  }
  return ret;
}

// Best solution & clever
function count(string) {
  var count = {};
  string.split('').forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}
