//중간에 하나 정점 찍고 내려오는 수열이 바이토닉 수열이다.
//n까지의 증가수열중 가장 긴 수열 + n부터의 감소수열중 가장 긴 수열
//
let lis = [];
let lds = [];

function getlis(n, array) {
  if (n === 1) {
    lis[1] = 1;
    return 1;
  }
  if (lis[n] != undefined) {
    return lis[n];
  }
  lis[n] = 1;
  for (let i = 1; i < n; i += 1) {
    if (array[i] < array[n]) {
      lis[n] = Math.max(lis[n], getlis(i, array) + 1);
    }
  }
  return lis[n];
}
function getlds(n, array) {
  let end = array.length - 1;
  if (n === end) {
    lds[n] = 1;
    return 1;
  }
  if (lds[n] != undefined) {
    return lds[n];
  }
  lds[n] = 1;
  for (let i = end; n < i; i -= 1) {
    if (array[i] < array[n]) {
      lds[n] = Math.max(lds[n], getlds(i, array) + 1);
    }
  }
  return lds[n];
}
function sumLisLds(n, array) {
  return getlis(n, array) + getlds(n, array) - 1;
}
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let [n, numbers] = input.split("\n");
n = Number(n);
numbers = numbers.split(" ").map((x) => Number(x));
numbers.unshift(undefined);

lis = new Array(n + 1);
lds = new Array(n + 1);
let result = 0;
for (let i = 1; i < n + 1; i += 1) {
  result = Math.max(result, sumLisLds(i, numbers));
}
console.log(result);
