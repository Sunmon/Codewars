/**
 * @Kata Adding Big Numbers
 * @link https://www.codewars.com/kata/525f4206b73515bffb000b21
 * @Kyu 4
 * @Training Fundamentals
 * @date 2021-06-08
 * @author sunmon
 */


function add(a, b) {
  return (Number(a) + Number(b)).toString(); // Fix me!
}

function add(a,b) {
  if (!Number.isSafeInteger(Number(a) + Number(b))) {
    const [halfA, halfB] = divide(a,b);
    const [front, back] = [ add(halfA[0], halfB[0]), add(halfA[1], halfB[1])]
    const carry = Math.max(halfA[1], halfB[1]) !== back.length;
    return carry ?  ( Number(front) + 1 ).toString() + back.slice(1) : front + back;
  }

  return ( Number(a) + Number(b) ).toString();
}

function divide(a,b) {
  let halfA, halfB;
  if (a.length > b.length) {
    halfA = halfcut(a);
    halfB = halfcut('0'.repeat(a.length - b.length) + b);
  } else if (a.length < b.length) {
    halfA = halfcut('0'.repeat(b.length - a.length) + a);
    halfB = halfcut(b);
  } else {
    halfA = halfcut(a);
    halfB = halfcut(b);
  }
  return [halfA, halfB]
}

function halfcut(a) {
  const len = a.length;
  return [a.slice(0, len/2), a.slice(len/2)];
}

const answer = add('63829983432984289347293874', '90938498237058927340892374089')
console.log(answer, answer === "91002328220491911630239667963")