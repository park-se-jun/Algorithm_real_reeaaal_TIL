/**
 *
 * @param {Number} alp
 * @param {Number} cop
 * @param {Array<Array<Number>>} problems
 * @returns {Number}
 */
function solution(initAlp, initCop, problems) {
  let maxAlp = 0;
  let maxCop = 0;
  for (const element of problems) {
    maxAlp = maxAlp>element[0]?maxAlp: element[0];
    maxCop = maxCop>element[1]?maxCop: element[1];
  }
  const cache = Array.from({ length: 151 }, () => Array(151).fill(undefined));
  var answer = 0;
  return dp(maxAlp, maxCop);

  function dp(targetAlp, targetCop) {
    if (targetAlp <= initAlp && targetCop <= initCop) {
      cache[targetAlp][targetCop] = 0;
    } 
    if (cache[targetAlp][targetCop] != undefined) {
      return cache[targetAlp][targetCop];
    }
    //할 수 있는 것
    //직전에 알고리즘 공부를 할 경우
    const studyalgo =
      targetAlp > initAlp ? dp(targetAlp - 1, targetCop) + 1 : Infinity;
    //직전에 코딩 공부를 할 경우
    const studyCoding =
      targetCop > initCop ? dp(targetAlp, targetCop - 1) + 1 : Infinity;

    //직전에 문제를 풀었을 경우
    let solveProblem = Infinity;
    for (const element of problems) {
      //못푸는 문제(알고력이 딸리거나 나 코딩력이 딸림)는 고려하지 않아도 됨
      if (
        targetAlp - element[2] < element[0] ||
        targetCop - element[3] < element[1]
      ) {
        continue;
      } else {
        const tmp = dp(targetAlp - element[2], targetCop - element[3]) + element[4];
        solveProblem = solveProblem<tmp ? solveProblem : tmp;
      }
    }
    cache[targetAlp][targetCop] = Math.min(
      solveProblem,
      studyCoding,
      studyalgo
    );
    return cache[targetAlp][targetCop];
  }
}

const result = solution(0, 0, [
  [0, 0, 2, 1, 2],
  [4, 5, 3, 1, 2],
  [4, 11, 4, 0, 2],
  [10, 4, 0, 4, 2],
]);
console.log(result);
