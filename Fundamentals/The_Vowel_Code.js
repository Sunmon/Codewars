/**
 * @Kata The Vowel Code
 * @link https://www.codewars.com/kata/53697be005f803751e0015aa
 * @Kyu 6
 * @Training Fundamentals
 * @date 2021-05-13
 * @author sunmon
 */

const vowels = { a: '1', e: '2', i: '3', o: '4', u: '5' };

function encode(string) {
  let answer = string;
  Object.entries(vowels).forEach(([key, val]) => {
    const re = new RegExp(`${key}`, 'gi');
    answer = answer.replace(re, val);
  });
  return answer;
}

function decode(string) {
  let answer = string;
  Object.entries(vowels).forEach(([key, val]) => {
    const re = new RegExp(`${val}`, 'gi');
    answer = answer.replace(re, key);
  });
  return answer;
}

// Best practice & Clever practice
// turn vowels into numbers
function encode(string) {
  return string.replace(/[aeiou]/g, function (x) {
    return '_aeiou'.indexOf(x);
  });
}

//turn numbers back into vowels
function decode(string) {
  return string.replace(/[1-5]/g, function (x) {
    return '_aeiou'.charAt(x);
  });
}

// second clever
const table = ['a', 'e', 'i', 'o', 'u'];
const encode = string =>
  string
    .split('')
    .map(x => table.indexOf(x) + 1 || x)
    .join('');
const decode = string =>
  string
    .split('')
    .map(x => table[Number(x) - 1] || x)
    .join('');
