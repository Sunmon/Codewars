/**
 * @Kata The Lift
 * @link https://www.codewars.com/kata/58905bfa1decb981da00009e/
 * @Kyu 3
 * @Training Fundamentals
 * @date 2021-06-12
 * @author sunmon
 */

// returns floors lift stopped
const theLift = function(queues, capacity) {
  // Your code here!
  
  let floor = 0;
  let direction = 1; // 1 : up, -1: down
  let lift = [];
  let loads = [];
  
  //TODO: 계속 움직일것

  // get off
  lift = lift.filter(f => f !== floor);

  // get people who wants to upstairs
  for (let i = queue[floor].length-1; i >= 0; i--) {
    if (lift.length === capacity) break;
    if (direction === 1 && queues[floor][i] > floor) {
      loads = [...loads, ...queues[floor][i].splice(i, 1)]
    } else if (direction === -1 && queues[floor][i] < floor) {
      loads = [...loads, ...queues[floor][i].splice(i, 1)]
    }
  }

  lift = [...lift, loads.reverse()];


  



  // let waiting = queues[floor].filter(dest => dest >= floor + direction);
  // waiting.splice(0, capacity - lift.length);

  // lift = [...lift, ...waiting]
  // queues[floor] = queues[floor].map()




  return [999]
}


const up = function() {

}


var queues = [
  [], // G
  [], // 1
  [5,5,5], // 2
  [], // 3
  [], // 4
  [], // 5
  [], // 6
];
var result = theLift(queues,5);

console.log(result)
