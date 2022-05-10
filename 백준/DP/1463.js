let cache = [];

function solution(input) {
  cacheSize = Number(input);
  cache = new Array(cacheSize + 1).fill(Infinity);
  result = recursive(cacheSize);
  console.log(result);
}

function recursive(N) {
  let dividedBy2 = Infinity;
  let dividedBy3 = Infinity;
  let minus1 = Infinity;
  if (N === 1) {
    return 0;
  }
  if (cache[N] != Infinity) {
    return cache[N];
  }
  if (N % 3 === 0) {
    cache[N / 3] = recursive(N / 3);
    dividedBy3 = cache[N / 3];
  }
  if (N % 2 === 0) {
    cache[N / 2] = recursive(N / 2);
    dividedBy2 = cache[N / 2];
  }
  cache[N - 1] = recursive(N - 1);
  minus1 = cache[N - 1];
  cache[N] = Math.min(minus1, dividedBy2, dividedBy3) + 1;
  return cache[N];
}
const input = require("fs").readFileSync("./input.txt").toString();
solution(input);
