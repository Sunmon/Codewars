/**
 * @Kata String transformer
 * @link https://www.codewars.com/kata/5878520d52628a092f0002d0/javascript
 * @Kyu 6
 * @Training Fundamentals
 * @date 2021-03-04
 * @author sunmon
 */

function stringTransformer(str) {
  const arr = str.split(' ');
  const isLower = word => word === word.toLowerCase();
  const switched = arr.map(words =>
    words
      .split('')
      .reduce(
        (prev, cur) =>
          isLower(cur) ? prev + cur.toUpperCase() : prev + cur.toLowerCase(),
        '',
      ),
  );
  return switched.reduce((prev, cur) => cur + ' ' + prev);
}

// 내 답 수정
function stringTransformer(str) {
  const arr = str.split(' ').reverse();
  const isLower = word => word === word.toLowerCase();
  const switched = arr.map(words =>
    words
      .split('')
      .map(w => (isLower(w) ? w.toUpperCase() : w.toLowerCase()))
      .join(''),
  );
  return switched.join(' ');
}

// Best Practice, Clever
function stringTransformer(str) {
  return str
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(v => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join('');
}

console.log(stringTransformer('Example string'));
