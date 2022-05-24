//N 은 세로길이
//M 은 가로 길이
//3X7 보다 크면 -> 상관 X
//3X7 OR 7X3 이면 -> 5개
const path = process.platform === "linux"?"/dev/stdin":"./input.txt"
const input = require("fs").readFileSync(path).toString().trim();
let [N,M] = input.split(" ").map(Number);
let result = 0
if(N=== 1){
    result = 1;
}else if(N===2)
    result = Math.min(4,Math.floor((M+1)/2));
else if(M<7)
    result = Math.min(4,M);
else
    result = M-7 + 5
console.log(result)