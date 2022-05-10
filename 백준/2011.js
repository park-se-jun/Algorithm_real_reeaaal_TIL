/**
 * 30=> 0
 * 20 => 1
 * 203 => 1
 * 2 => 1
 * 21 => 1 + 1
 * 213 => 2 + if 13이 변환 가능라면 1
 *  어떤 수열에 대해 cache[n]1~n 까지의 부분수열을 해석할때의 해독 갯수
 * 1001 => 해석 불가
 * 25/1
 * 2511 =>2 5 1 1/ 25 11/2 5 11/25 1 1
 */
let cache = [];
function dp(n, numberString) {
  let lastNumber = Number(numberString.charAt(n - 1));
  let last2Number = Number(numberString.substring(n - 2, n));
  if (n === 1) {
    if (lastNumber != 0) {
      cache[1] = 1;
      return cache[1];
    } else {
      cache[1] = 0;
      return cache[1];
    }
  }
  if (n === 2) {
    if (lastNumber == 0) {
      if (last2Number === 10 || last2Number === 20) {
        cache[2] = 1;
      } else return 0;
    } else {
      cache[2] = dp(1, numberString);
      if (26 >= last2Number && 10 <= last2Number) {
        cache[2] += 1;
      }
    }
    return cache[2];
  }
  if (cache[n] != undefined) {
    return cache[n];
  }
  if (lastNumber != 0) {
    cache[n] = dp(n - 1, numberString) % 1000000;
    if (26 >= last2Number && 10 <= last2Number) {
      cache[n] += dp(n - 2, numberString) % 1000000;
    }
  } else {
    //lastNumver 가 0 일 경우
    if (last2Number === 10 || last2Number === 20) {
      cache[n] = dp(n - 2, numberString) % 1000000;
    } else {
      cache[n] = 0;
    }
  }
  cache[n] = cache[n] % 1000000;
  return cache[n];
}

// const input = require("fs").readFileSync("./input.txt").toString().trim();
const input = "208227";
cache = new Array(input.length + 1);
console.log(dp(input.length, input) % 1000000);
