//N 종류의 동전
//매우 많이 가지고 있음
//가치의 합을 K 로 만들 때 필요한 동전 개수으 최솟값
function solution(input){
    [firstLine,...rest] = input.split("\n");
    let[n,k] = firstLine.split(" ").map(Number);
    let result = 0;
    let coins = rest.map(Number);
    for(let i = coins.length -1 ; i>=0;i-=1){
        if(k===0) break;
        while(coins[i]<=k){
            k-=coins[i];
            result +=1;
        }
        
    }
    console.log(result)
}
const path = process.platform === "linux"? "/dev/stdin":"./input";
const input = require("fs").readFileSync(path).toString().trim();
solution(input);