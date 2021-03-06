/**
 * @Kata The Deaf Rats of Hamelin
 * @link https://www.codewars.com/kata/598106cb34e205e074000031
 * @Kyu 6
 * @date 2021-03-06
 * @author sunmon
 */

var countDeafRats = function(town) {
 town = town.replace(/ /g, '')
  const idx = town.indexOf('P')
  let ret = 0;
  for(let i = 2; i< town.length; i+=2) {
    if (idx-i >= 0 && town.slice(idx-i, idx-i+2) === 'O~') ret += 1;
    if (idx+i <= town.length && town.slice(idx+i-1, idx+i+1) === '~O') ret += 1;
  }
  return ret
}

// Clever
var countDeafRats = function(town) {
  // Your code here
  if(town != null){
    [left,right]=town.split('P');
    var a=left+right.split('').reverse().join('');
    var b=(a.match(/O~|~O/gi)||[]).filter(v=>v=='O~').length;
    return b;
  }
  return 0;
}

// Clever 2
var countDeafRats = function(town) {
  return [...town.replace(/ +/g,'')].reduce((a,c,i) => a+(i%2==0 && c=='O'), 0);
}
