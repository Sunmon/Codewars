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
  if (!Number.isSafeInteger(Number(a)) || !Number.isSafeInteger(Number(b))) {
    const halfA = halfcut(a);
    const halfB = halfcut(b);
    const [front, back] = [ add(halfA[0], halfB[0]), add(halfA[1], halfB[1])]
    console.log('front, back: ', front, back)
    const carry = Math.max(halfA[1], halfB[1]) !== back.length;
    return carry ?  ( Number(front) + 1 ).toString() + back : front + back;
  }

  return ( Number(a) + Number(b) ).toString();
}

function halfcut(a) {
  const len = a.length;
  a.slice(len/2)
  return [a.slice(0, len/2), a.slice(len/2)];
}

console.log((add("1", "1")))
console.log(add('63829983432984289347293874', '90938498237058927340892374089'))