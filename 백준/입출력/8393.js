const { FsIO } = require("./IO");

function solution(value) {
  const input = Number(value);
  console.log((input * (1 + input)) / 2);
}
FsIO("./input.txt", solution);
