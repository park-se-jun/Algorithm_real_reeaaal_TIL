//원형 큐?
function solution(input){
    let [n,k] = input.split(" ").map(Number);
    let queue = [];
    let result = [];
    for(let i =1;i<=n;i+=1){
        queue.push(i);
    }
    while(queue.length!=0){
        for(let i = 0;i<k-1;i+=1){
            queue.push(queue.shift());
        }
        result.push(queue.shift());
    }
    let output = "<" + result.join(", ") + ">";
    console.log(output)
};
const path = process.platform === "linux"?"/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
solution(input);