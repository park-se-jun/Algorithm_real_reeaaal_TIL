function getNext(now, P) {
  let next = 0;
  while (now != 0) {
    const remain = now % 10;
    now = Math.floor(now / 10);
    next += remain ** P;
  }
  return next;
}
function solution(input) {
  myMap = new Map();
  const [A, P] = input.split(" ").map((x) => Number(x));
  let now = A;
  while (myMap.get(now) === undefined) {
    myMap.set(now, true);
    now = getNext(now, P);
  }
  while (myMap.get(now) != undefined) {
    myMap.delete(now);
    now = getNext(now, P);
  }
  console.log(myMap.size)
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim()

solution(input);

//백트래킹?
