/**
 * @Kata Calculating with Functions
 * @link https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
 * @Kyu 5
 * @Training Fundamentals
 * @date 2021-01-16
 * @author sunmon
 */

const zero = f => (f === undefined ? 0 : eval('0' + f) | 0);
const one = f => (f === undefined ? 1 : eval('1' + f) | 0);
const two = f => (f === undefined ? 2 : eval('2' + f) | 0);
const three = f => (f === undefined ? 3 : eval('3' + f) | 0);
const four = f => (f === undefined ? 4 : eval('4' + f) | 0);
const five = f => (f === undefined ? 5 : eval('5' + f) | 0);
const six = f => (f === undefined ? 6 : eval('6' + f) | 0);
const seven = f => (f === undefined ? 7 : eval('7' + f) | 0);
const eight = f => (f === undefined ? 8 : eval('8' + f) | 0);
const nine = f => (f === undefined ? 9 : eval('9' + f) | 0);

const plus = a => `+${a}`;
const minus = a => `-${a}`;
const times = a => `*${a}`;
const dividedBy = a => `/${a}`;

/**
 * Best Practice
 */
var n = function (digit) {
  return function (op) {
    return op ? op(digit) : digit;
  };
};

var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
  return function (l) {
    return l + r;
  };
}
function minus(r) {
  return function (l) {
    return l - r;
  };
}
function times(r) {
  return function (l) {
    return l * r;
  };
}
function dividedBy(r) {
  return function (l) {
    return l / r;
  };
}

/**
 * Clever
 */
[
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
].forEach(function (name, n) {
  // this는 global scope를 의미한다
  this[name] = function (f) {
    return f ? f(n) : n;
  };
});

function plus(n) {
  return function (a) {
    return a + n;
  };
}

function minus(n) {
  return function (a) {
    return a - n;
  };
}
function times(n) {
  return function (a) {
    return a * n;
  };
}
function dividedBy(n) {
  return function (a) {
    return parseInt(a / n);
  };
}

// 위 코드는 아래 코드를 반복하는것과 같다.
// const global = {};

// global['one'] = function (f) {
//   return f ? f(n) : 1;
// };
