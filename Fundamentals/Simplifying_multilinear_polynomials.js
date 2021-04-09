/**
 * @Kata Simplifying multilinear polynomials
 * @link https://www.codewars.com/kata/55f89832ac9a66518f000118
 * @Kyu 4
 * @Training Fundamentals
 * @date 2021-04-09
 * @author sunmon
 */

// TODO: FIX ME

function simplify(poly) {
  const variables = poly.match(/[a-z]+/g).map(variable => equivalent(variable));
  const numbers = poly.match(/[^a-z]+/g);
  if (poly[0] !== '-' && isNaN(poly[0])) numbers.unshift('+');
  console.log('numbers: ', numbers);
  const obj = calculate(numbers, variables);
  console.log('obj: ', obj);
  const result = objToString(obj);

  return result[0] === '+' ? result.substr(1) : result;
}

function equivalent(variable) {
  return [...variable].sort().join('');
}

function calculate(numbers, variables) {
  const obj = {};
  for (let i = 0; i < variables.length; i++) {
    const num = isNaN(numbers[i]) ? (numbers[i] === '+' ? 1 : -1) : +numbers[i];
    obj[variables[i]] = obj[variables[i]] || 0;
    obj[variables[i]] += num;
  }

  return obj;
}

function objToString(obj) {
  const arr = [];
  for ([k, v] of Object.entries(obj)) {
    arr.push([k, v]);
  }

  arr.sort((a, b) => {
    // if (a[0] < b[0])
    // if (a[1] < b[1]) return -1;
    // else if (a[1] > b[1]) return 1;
    return a[0] < b[0] ? -1 : 1;
  });

  return arr.reduce((prev, cur) => {
    if (cur[1] === 0) return prev;
    if (cur[1] > 0) {
      if (cur[1] === 1) return prev + '+' + cur[0];
      else return prev + '+' + cur[1] + cur[0];
    }
    if (cur[1] < 0) {
      if (cur[1] === -1) return prev + '-' + cur[0];
      else return prev + cur[1] + cur[0];
    }
    return prev;
  }, '');
}

const str = 'y-x';
console.log(simplify(str));
