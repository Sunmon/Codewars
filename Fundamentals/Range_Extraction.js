/**
 * @Kata Range Extraction
 * @link https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/
 * @Kyu 4
 * @Training Fundamentals
 * @date 2021-05-18
 * @author sunmon
 */

function solution(list) {
  // let pos = -1;
  const ret = [];
  const a = list.filter((val, i, arr) => arr[i] + 1 === arr[i + 1]);
  const b = list.filter((val, i, arr) => arr[i] + 1 !== arr[i + 1]);

  let [i, j] = [0, 0];
  console.log(a);
  console.log(b);
  let counter = 0;
  while (i < a.length && j < b.length) {
    if (a[i] > b[j]) {
      if (counter >= 2) {
        ret.push(`${a[i - counter - 1]}-${a[i - 1]}`);
      } else {
        ret.push(a[i - 1]);
        ret.push(b[j]);
      }
      j += 1;
    } else if (a[i] < b[j]) {
      i += 1;
      counter += 1;
    }
  }

  return ret;
}

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ]),
);
