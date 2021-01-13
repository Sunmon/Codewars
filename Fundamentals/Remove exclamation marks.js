/**
 * @Kata Remove exclamation marks
 * @link https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
 * @Kyu 8
 * @date 2021-01-13
 * @author sunmon
 */
// 내 답. clever랑 같다
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

// Best Practice
function bestPractice(s) {
  return s.replace(/!/gi, '');
}
