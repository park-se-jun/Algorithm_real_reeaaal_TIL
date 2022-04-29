let cache = [];
const input = Number(require("fs").readFileSync("./input.txt").toString());
cacheSize = input + 1;
cache = Array.from(Array(cacheSize), () => new Array(10));
solution(input);

function solution(number) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    answer += dp(number, i);
  }
  console.log(answer % 10007);
}

function dp(N, index) {
  if (N === 1) {
    return 1;
  }
  if (cache[N][index] != undefined) {
    return cache[N][index];
  }
  cache[N][index] = 0;
  for (let i = index; i < 10; i++) {
    cache[N][index] += dp(N - 1, i);
  }
  cache[N][index] = cache[N][index] % 10007;
  return cache[N][index];
}
