function fsIO(path, solution) {
  const fs = require("fs");
  input = fs.readFileSync(path).toString();
  solution(input);
}
function solution(input) {
  const [T, number] = input.split("\n");
  const numberArray = number.split("").map((x) => Number(x));
  const result = numberArray.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
  console.log(result);
}
fsIO("./input.txt", solution);
