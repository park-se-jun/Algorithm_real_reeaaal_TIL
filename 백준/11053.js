// const input = require("fs").readFileSync("/dev/stdin").toString();
// const input = require("fs").readFileSync("./input.txt").toString();
// 만약 array[n] 가 지금까지 탐색한 array중 최고로 높다면?
// 최대 증가수열 1 증가
//a[i] : 수열의 i번째 수
//d[i] :a[i]를 마지막으로 가지는 가장 긴 증가부분수열의 길이
// a[i]보다 작은
//d[i] =  d[j] +1 (j는 a[i]보다 작은 a[j])
let cache = [];
function dp(n, array) {
  if (n === 1) {
    cache[n] = 1;
    return 1;
  }
  if (cache[n] != -1) {
    return cache[n];
  }
  let bigyo = [0];
  for (let i = 1; i < n; i += 1) {
    if (array[n] > array[i]) {
      bigyo.push(dp(i, array));
    } else {
      dp(i, array);
    }
  }
  cache[n] = Math.max(...bigyo) + 1;
  return cache[n];
}
function solution(input) {
  let [N, remain] = input.split("\n");
  N = Number(N);
  cache = new Array(N + 1).fill(-1);
  let array = remain.split(" ").map((x) => Number(x));
  array.unshift(undefined);

  dp(N, array);
  const result = Math.max(...cache);
  console.log(result);
}
solution(`6
1 4 5 6 2 3`);
