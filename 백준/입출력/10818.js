const { FsIO } = require("./IO");

function solution(value) {
  const [N, values] = value.split("\n");
  inputArrays = values.split(" ").map((x) => Number(x));
  const max = Math.max(...inputArrays);
  const min = Math.min(...inputArrays);
  console.log(min + " " + max);
}
FsIO("./input.txt", solution);
