/**
 * @Kata Directions Reduction
 * @link https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript
 * @Kyu 5
 * @Training Fundamentals
 * @date 2021-01-17
 * @author sunmon
 */

const opposite = {
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  EAST: 'WEST',
  WEST: 'EAST',
};

function dirReduc(arr) {
  const stack = [];
  let top = -1;
  for (let i = 0; i < arr.length; i++) {
    if (top < 0) {
      stack.push(arr[i]);
      top += 1;
    } else if (stack[top] === opposite[arr[i]]) {
      stack.pop();
      top -= 1;
    } else {
      stack.push(arr[i]);
      top += 1;
    }
  }
  return stack;
}

// Best solution
// 스택을 따로 구현하지 않고 reduce를 이용했다!
function dirReduc(plan) {
  var opposite = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST',
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

// Clever
function dirReduc(arr) {
  var str = arr.join(''),
    pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, '');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
