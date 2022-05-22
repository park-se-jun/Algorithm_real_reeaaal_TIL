//작은사람부터 인출 
function solution(input){
    let[firstLine, remains] = input.split("\n");
    remains = remains.split(" ").map(Number);
    remains.sort((a,b)=>a-b);
    result = 0;
    startTime = 0;
    remains.reduce((acc,curr)=>{
       let next = acc + curr;
        result += next;
       startTime += curr;
       return next;
    },0)
    console.log(result);
}
const path = process.platform==="linux"? "/dev/stdin":"./input.txt"
const input = require("fs").readFileSync(path).toString().trim();
solution(input)