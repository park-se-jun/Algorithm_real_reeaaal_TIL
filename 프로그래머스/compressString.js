//완전탐색
//1글자로 비교 -> 같은게 끝날때 까지
//같은게 끝나면 거기서 부터 다시 1개
//문자열 끝까지 반복
//2글자로 비교
let howManySameChar = 0;
let compressedStringLength = [Infinity];
function solution(s) {
  for (
    let stringSize = 1;
    stringSize <= Math.floor((s.length +1)/2);
    stringSize++
  ) {
    let compressedString = "";
    compressedStringLength.push(0);
    howManySameChar = 0;
    let targetString = s.substring(0, stringSize);
    for (let now = 0; now < s.length ; now += stringSize) {
      let nowString = s.substring(now, now + stringSize);
      if (targetString === nowString) {
        howManySameChar += 1;
      } else {
        if (howManySameChar != 1) {
          //1이 아니라면 몇개를 줄인건지 추가.
          compressedString += howManySameChar;
        }
        compressedString += targetString;
        targetString = nowString;
        howManySameChar = 1;
      }
    }
    if (howManySameChar != 1) {
      //1이 아니라면 몇개를 줄인건지 추가.
      compressedString += howManySameChar;
    }
    compressedString += targetString;
    howManySameChar = 1;
    compressedStringLength[stringSize] = compressedString.length;
  }
  let answer = Math.min(...compressedStringLength);
  return answer;
}
solution(`a`);
