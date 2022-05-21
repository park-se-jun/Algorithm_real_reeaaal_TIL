/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//dp 문제
let cache;
function dp(n, coins) {
  let minCoins = [];
  if (n < 0) return Infinity;
  if (n === 0) return 0;
  if (cache[n] != undefined) return cache[n];
  for (let i = 0; i < coins.length; i += 1) {
    if (n === coins[i]) {
      cache[n] = 1;
      return 1;
    }
  }
  for (let i = 0; i < coins.length; i += 1) {
    minCoins.push(dp(n - coins[i], coins));
  }
  let min = Math.min(...minCoins);
  if (min === Infinity) cache[n] = Infinity;
  else cache[n] = min + 1;
  return cache[n];
}
var coinChange = function (coins, amount) {
  cache = new Array(amount + 1);
  let result = dp(amount, coins);
  return result===Infinity?-1:result;
};

coinChange([186, 419, 83, 408], 6249);
