/**
 * @Kata Replace With Alphabet Position
 * @link https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript
 * @Kyu 6
 * @Training Fundamentals
 * @date 2021-01-19
 * @author sunmon
 */

function alphabetPosition(text) {
  text = text.toLowerCase().split('');
  const a = 'a'.charCodeAt(0) - 1;
  const z = 'z'.charCodeAt(0) - a;
  return text
    .reduce((res, cur) => {
      const i = cur.charCodeAt(0) - a;
      if (i > 0 && i <= z) res.push(i);
      return res;
    }, [])
    .join(' ');
}

//  Best Practice1 & Clever
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map(c => c.charCodeAt() - 64)
    .join(' ');
}

// Best Practice2
function alphabetPosition(text) {
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + ' ';
  }

  return result.slice(0, result.length - 1);
}
