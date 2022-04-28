const { FsIO } = require("./IO");
function solution(input) {
  const N = Number(input);
  let output = "";
  for (let i = 1; i < N + 1; i += 1) {
    output += " ".repeat(N - i);
    if (i === 1) {
      output += "*\n";
      continue;
    }
    if (i === N) {
      output += "*".repeat(i * 2 - 1);
      continue;
    }
    output += "*";
    output += " ".repeat(i * 2 - 3);
    output += "*\n";
  }
  console.log(output);
}
FsIO("./input.txt", solution);
