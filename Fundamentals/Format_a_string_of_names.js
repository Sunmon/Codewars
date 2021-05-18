/**
 * @Kata Format a string of names like 'Bart, Lisa & Maggie'.
 * @link https://www.codewars.com/kata/53368a47e38700bd8300030d
 * @Kyu 6
 * @Training Fundamentals
 * @date 2021-01-22
 * @author sunmon
 */

function list(names) {
  if (!names.length) return '';
  const last = names.splice(-1)[0].name;
  const first = names.map(n => n.name).join(', ');
  return first ? `${first} & ${last}` : last;
}

// Best solution
function list(names) {
  return names.reduce(function (prev, current, index, array) {
    if (index === 0) {
      return current.name;
    } else if (index === array.length - 1) {
      return prev + ' & ' + current.name;
    } else {
      return prev + ', ' + current.name;
    }
  }, '');
}

// Clever
// 기본값을 이용한다 ( x || "")
function list(names) {
  var xs = names.map(p => p.name);
  var x = xs.pop();
  return xs.length ? xs.join(', ') + ' & ' + x : x || '';
}
