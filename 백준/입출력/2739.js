function fsIO(path, solution) {
  const fs = require("fs");
  const input = fs.readFileSync(path).toString();
  solution(input);
}
function solution(input) {
  const N = Number(input); //이거 Number로 안바꿔준채로 계속 해서 백준에서 오류남
  for (let i = 0; i < 9; i += 1) {
    const value = i + 1;
    const result = value * N;
    console.log(`${N} * ${value} = ${result}`);
  }
}
fsIO("./input.txt", solution);
