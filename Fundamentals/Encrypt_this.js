/**
 * @Kata Encrypt this!
 * @link https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
 * @Kyu 6
 * @Training Fundamentals
 * @date 2021-01-26
 * @author sunmon
 */

const encryptThis = function (text) {
  return text
    .split(' ')
    .map(t => {
      const temp = t.slice(1).split('');
      if (temp.length)
        [temp[0], temp[temp.length - 1]] = [temp[temp.length - 1], temp[0]];
      return temp ? t.charCodeAt(0) + temp.join('') : t.charCodeAt(0);
    })
    .join(' ');
};

// Best Practice
// Replace() 메소드를 이용한다. 정규식을 이용하여 치환!
const encryptThis = text =>
  text
    .split(' ')
    .map(word =>
      word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, word.charCodeAt(0)),
    )
    .join(' ');

// Clever
const encryptThis = text =>
  text.replace(
    /\b\w(\w?)(\w*?)(\w?)\b/g,
    (word, a, mid, b) => word.charCodeAt(0) + b + mid + a,
  );
