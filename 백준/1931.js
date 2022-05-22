//끝나는 시간이 가장 이른 거로 정렬
function solution(input){
    let[size,... remains] = input.split("\n");
    for(let [index ,element] of remains.entries()){
        let startAndEnd = element.split(" ").map(Number);
        remains[index] = startAndEnd;        
    }
    remains.sort((a,b)=>{
        return a[0] - b[0];
    })
    remains.sort((a,b)=>{
        return a[1] - b[1];
    })
    let result = 0;
    let endTime = 0;
    for(let element of remains){
        if(element[0]>=endTime){
            endTime = element[1];
            result +=1;
        }
    }
    console.log(result)
}
const path = process.platform==="linux"? "/dev/stdin":"./input.txt"
const input = require("fs").readFileSync(path).toString().trim();
solution(input)