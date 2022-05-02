function solution(n, words) {
  let answer = [0, 0];
  let failedNumber;
  const myMap = new Map();
  for (let i = 0; i < words.length; i += 1) {
    if (i >= 1) {
      const prevEnd = words[i - 1].charAt(words[i - 1].length - 1);
      const currStart = words[i].charAt(0);
      if (prevEnd != currStart) {
        failedNumber = i + 1;
        break;
      }
    }

    myMap.set(words[i], (myMap.get(words[i]) || 0) + 1);
    if (myMap.get(words[i]) === 2) {
      failedNumber = i + 1;
      break;
    }
  }
  if (failedNumber != undefined) {
    answer = [failedNumber % n, Math.ceil(failedNumber / n)];
    if (answer[0] === 0) answer[0] = n;
  }
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}
