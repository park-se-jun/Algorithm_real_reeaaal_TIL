function fsIO(path, solution) {
  const fs = require("fs");
  const input = fs.readFileSync(path).toString();
  solution(input);
}
function solution(input) {
  const lengthDividedBy10 = parseInt(input.length / 10);
  for (let i = 0; i < lengthDividedBy10 + 1; i += 1) {
    const beginIndex = i * 10;
    console.log(input.substr(beginIndex, 10));
  }
}

fsIO("./input.txt", solution);
