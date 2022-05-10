let cache = [];
function dp(n, array) {
  //n이 가장 큰 부분 증가 수열의 합의 최대값
  let bigyo = [0];
  if (n === 1) {
    cache[n] = array[n];
  }
  if (cache[n] != -1) {
    return cache[n];
  }
  for (let i = 1; i < n; i++) {
    if (array[n] > array[i]) {
      bigyo.push(dp(i, array));
    } else {
      dp(i, array);
    }
  }
  cache[n] = Math.max(...bigyo) + array[n];
  return cache[n];
}
function solution(input) {
  let [N, numbers] = input.split("\n");
  N = Number(N);
  cache = new Array(N + 1).fill(-1);
  numbers = numbers.split(" ").map((x) => Number(x));
  numbers.unshift(undefined);
  dp(N, numbers);
  const result = Math.max(...cache);
  console.log(result);
}
solution(`10
100 110 90 80 70 80 90 1 2 3`);
