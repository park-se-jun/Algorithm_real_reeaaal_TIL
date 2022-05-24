/**
 * 0~n 까지의 숫자중 4개를 고르는 모든 경우를 출력
 */
for (let i = 0; i < n; i += 1) {
  for (let j = i + 1; j < n; j += 1) {
    for (let k = j + 1; k < n; k += 1) {
      for (let l = k + 1; l < n; l += 1) {
        console.log(`${i} ${j} ${k} ${l}`);
      }
    }
  }
}
/**
 * 5개,6개7개가 된다면 코드가 복잡해진다.
 * 재귀로 변경하면 보다 간결하고 유연한 코드를 작성할 수 있다.
 */
/**
 *
 * @param {number} n
 * @param {number[]} picked
 * @param {number} toPik
 */
function pick(n, picked, toPick) {
  if (toPick == 0) {
    printPicked(picked);
    return;
  }
  let smallest = picked.length===0?0:picked[-1] + 1;
  for(let next = smallest;next<n;next+=1){
      picked.push(next);
      pick(n,picked,toPick - 1);
      picked.pop();
  }
}
