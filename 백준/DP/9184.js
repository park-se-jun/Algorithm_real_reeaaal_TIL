"use strict";
// let cache = Array.from({length:21},()=>{
//     return Array.from({length:21},()=> new Array(21))
// });
let cache = Array.from({length:21},()=>{
    return Array.from({length:21},()=> new Array(21).fill(0))
});

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
  if (cache[a][b][c]) {
    return cache[a][b][c];
  }
  if (a < b && b < c) {
    cache[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    return cache[a][b][c];
  }

  cache[a][b][c] =
    w(a - 1, b, c) +
    w(a - 1, b - 1, c) +
    w(a - 1, b, c - 1) -
    w(a - 1, b - 1, c - 1);
  return cache[a][b][c];
}
function solution(input) {
  let lines = input.split("\n");
  for (let element of lines) {
    let [a, b, c] = element.split(" ").map((x) => Number(x));
    if (a === -1 && b === -1 && c === -1) break;
    console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
  }
}
solution(`1 1 1
2 2 2
10 4 6
50 50 50
-1 7 18
-1 -1 -1`)