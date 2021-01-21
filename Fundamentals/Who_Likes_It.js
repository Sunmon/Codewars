/**
 * @Kata Who likes it?
 * @link https://www.codewars.com/kata/5266876b8f4bf2da9b000362
 * @Kyu 6
 * @Training Fundamentals
 * @date 2021-01-21
 * @author sunmon
 */

function likes(names) {
  const { length } = names;
  const ret = 'this';
  const like = length > 1 ? 'like this' : 'likes this';
  if (!length) return `no one ${like}`;
  if (length === 1) return `${names[0]} ${like}`;
  if (length === 2) return `${names[0]} and ${names[1]} ${like}`;
  if (length === 3) return `${names[0]}, ${names[1]} and ${names[2]} ${like}`;
  return `${names[0]}, ${names[1]} and ${length - 2} others ${like}`;
}

// Clever
// 객체로 넣어서 값을 빼가는 방법
function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

// Clever 2
// 템플릿을 이용하는 방법
function likes(names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this',
  ];
  var idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}
