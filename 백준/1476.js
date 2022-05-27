//완전탐색 문제, 가장 빠른 연도를 출력한다.

const input = require("fs").readFileSync("./input.txt").toString().trim();
let [e,s,m] = input.split(" ").map(Number);
let result = 0;
let num = 1
while(1){
  if ((num-e)%15 == 0 && (num-s)%28==0 && (num-m)%19 == 0) {
    break;
  }
  num+=1;
}
console.log(num);
