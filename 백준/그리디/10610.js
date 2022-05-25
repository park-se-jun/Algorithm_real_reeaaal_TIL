//30의 배수 -> 3의 배수 이면서 10의 배수
function solution(input){
    let myNumber=Number(input);
    let inputArray = input.split("");
    let sum = inputArray.reduce((acc,cur)=>acc+Number(cur),0)
    if(sum%3===0 && input.includes("0")){
        inputArray.sort((a,b)=>b-a);
        console.log(inputArray.join(""))
    }else{
        console.log(-1)
    }
}
const path = process.platform ==="linux"?"/dev/stdin":"./input.txt"
const input = require("fs").readFileSync(path).toString().trim()
solution(input)