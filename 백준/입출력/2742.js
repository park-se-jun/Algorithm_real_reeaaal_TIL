function fsIO(path, solution) {
  const fs = require("fs");
  const input = fs.readFileSync(path).toString();
  solution(input);
}
function solution(input) {
  const N = Number(input);
  let result = "";
  for (let i = 1; i < N + 1; i += 1) {
    result += N + 1 - i + "\n";
  }
  console.log(result);
}
fsIO("./input.txt", solution);
