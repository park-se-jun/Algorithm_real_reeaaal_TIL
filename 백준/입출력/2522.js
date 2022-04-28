const { FsIO } = require("./IO");
function solution(value) {
  const input = Number(value);
  let output = "";
  for (let i = 0; i < input; i++) {
    output += " ".repeat(input - (i + 1));
    output += "*".repeat(i + 1);
    output += "\n";
  }
  for (let i = 0; i < input; i++) {
    output += " ".repeat(i + 1);
    output += "*".repeat(input - (i + 1));
    output += "\n";
  }
  console.log(output);
}
FsIO("./input.txt", solution);
