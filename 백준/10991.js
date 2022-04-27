const { FsIO } = require("./IO");
function solution(input) {
  const N = Number(input);
  let output = "";
  for (let i = 0; i < N; i += 1) {
    output += " ".repeat(N - (i + 1));
    output += "* ".repeat(i + 1);
    output += "\n";
  }
  console.log(output);
}
FsIO("./input.txt", solution);
