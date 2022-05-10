//가장 긴 감소하는 부분 수열
// DP로 풀기
//dp[i] = a[i]가 가장 뒤인 감소하는 부분 수열
let cache = [];
function dp(n, array) {
  let bigyo = [0];
  if (n === 1) {
    cache[n] = 1;
    return 1;
  }
  if (cache[n] != -1) {
    return cache[n];
  }

  for (let i = 1; i < n; i++) {
    if (array[i] > array[n]) {
      bigyo.push(dp(i, array));
    } else {
      dp(i, array);
    }
  }
  cache[n] = Math.max(...bigyo) + 1;
  return cache[n];
}
function solution(input) {
  let [n, array] = input.split("\n");
  n = Number(n);
  cache = new Array(n + 1).fill(-1);
  array = array.split(" ").map((x) => Number(x));
  array.unshift(undefined);
  let max = 0;
  dp(n, array);
  for (element of cache) {
    if (element > max) {
      max = element;
    }
  }
  console.log(max);
}
solution(`4
6 5 7 3`);
