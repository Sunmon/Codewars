/**
 * @Kata Range Extraction
 * @link https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/
 * @Kyu 4
 * @Training Fundamentals
 * @date 2021-05-18
 * @author sunmon
 */

function solution(list) {
  const ret = [];
  let counter = 1;
  for (let i = 1; i < list.length; i++) {
    if (list[i] - list[i - 1] === 1) {
      counter += 1;
      continue;
    }
    if (counter === 1) {
      ret.push(list[i - 1]);
    } else if (counter === 2) {
      ret.push(list[i - 2]);
      ret.push(list[i - 1]);
    } else {
      ret.push(`${list[i - counter]}-${list[i - 1]}`);
    }
    counter = 1;
  }
  if (counter === 1) {
    ret.push(list[list.length - 1]);
  } else if (counter === 2) {
    ret.push(list[list.length - 2]);
    ret.push(list[list.length - 1]);
  } else {
    const [a, b] = [list[list.length - counter], list[list.length - 1]];
    ret.push(`${a}-${b}`);
  }
  return ret.join(',');
}

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ]),
);

// Best
function solution(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(',');
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3
    ? range.join(',')
    : range[0] + '-' + range[range.length - 1];
}

// Clever
function solution(list) {
  for (var i = 0; i < list.length; i++) {
    var j = i;
    while (list[j] - list[j + 1] == -1) j++;
    if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + '-' + list[j]);
  }
  return list.join();
}
