/**
 * @Kata Rock Paper Scissors
 * @link https://www.codewars.com/kata/5672a98bdbdd995fad00000f/javascript
 * @Kyu 8
 * @date 2021-01-12
 * @author sunmon
 */

// Sum Numbers
const rps = (p1, p2) => {
  const m = new Map([
    ['scissors', 0],
    ['rock', 1],
    ['paper', 2],
  ]);

  const results = [
    ['Draw', 'Player 2 won', 'Player 1 won'],
    ['Player 1 won', 'Draw', 'Player 2 won'],
    ['Player 2 won', 'Player 1 won', 'Draw'],
  ];

  return `${results[m.get(p1)][m.get(p2)]}!`;
};

// Best Practice
const bestPractice = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  if (p2 === rules[p1]) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};
