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
  let ret = '';
  let carry = 0;
  const [lenA, lenB] = [a.length, b.length] 
  if (lenA > lenB) b = '0'.repeat(lenA-lenB) + b;
  if (lenA < lenB) a = '0'.repeat(lenB-lenA) + a;
  for (let i = Math.max(lenA, lenB)-1; i>= 0; i--) {
    const val = Number(a[i]) + Number(b[i]) + carry
    carry = val >= 10 ? 1 : 0
    ret = val % 10 + ret; 
  }

  return carry ? '1' + ret : ret;
}
