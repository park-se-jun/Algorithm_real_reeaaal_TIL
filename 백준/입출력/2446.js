const { FsIO } = require("./IO");
function solution(input) {
  const N = Number(input);
  let output = "";
  console.log(N);
  for (let i = 0; i < N; i += 1) {
    output += " ".repeat(i);
    console.log((N - i) * 2 - 1);
    output += "*".repeat((N - i) * 2 - 1);
    output += "\n";
  }
  for (let i = 2; i < N + 1; i += 1) {
    output += " ".repeat(N - i);
    output += "*".repeat(i * 2 - 1);
    output += "\n";
  }
  console.log(output);
}
FsIO("./input.txt", solution);
