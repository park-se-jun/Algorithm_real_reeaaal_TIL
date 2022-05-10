//8가지 등급이 있는 ps 카드
//카드팩으로 구할 수 있고 1~ N 장이 들어있는 카드팩까지 총 n 개 있음
//돈을 최대한 많이 지불해 카드 N개를 구매
//가장 비싸게 지불하는 방법
//민규가 구매하려는 카드 수, 각 카드팩의 가격이 주어진다.

//주어진 리스트에서 N 개의 카드를 가장 비싸게 구하는 방법은?
//dp(n)
//
/**
 * 4
 * 1 5 6 7
 * dp(1) = 1
 * dp(2) = max(1+1,5);
 * dp(3) = max(6,dp(2)+dp(1));
 * dp(4) = max(7,dp(3)+dp(1),dp(2)+dp(2)
 *
 * 단위금액이 높은순서로 산다? -> 원소갯수만큼 for문이 돈다
 */
let cache = [];
function dp(n, array) {
  if (n === 1) {
    cache[1] = array[1];
    return cache[1];
  }
  if (cache[n] != -1) {
    return cache[n];
  }
  cache[n] = array[n];
  for (let i = 1; i < n / 2 + 1; i += 1) {
    cache[n] = Math.max(cache[n], dp(n - i, array) + cache[i]);
  }
  return cache[n];
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// const input = `4
// 5 2 8 10`;
let [N, price] = input.split("\n");
N = Number(N);
price = price.split(" ").map((x) => Number(x));
price.unshift(undefined);
console.log(price);
cache = new Array(N + 1).fill(-1);

console.log(dp(N, price));
