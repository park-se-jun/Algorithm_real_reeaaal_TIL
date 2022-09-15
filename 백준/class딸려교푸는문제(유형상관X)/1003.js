let cache = [];
function dp(number){
    if(number===0){
        cache[number] = [1,0,0];
        cache[number][1] = 0;
        cache[number][0] = 1;
    }else if(number === 1){
        cache[number] = [0,1,1];
    }
    if(cache[number]!=undefined){
        return cache[number];
    }
     let[zero1,one1,fibo1] = dp(number-1);
     let[zero2,one2,fibo2] = dp(number-2);
     cache[number] = [zero1+zero2,one1+one2,fibo1+fibo2];
     return cache[number];

}
/**
 * 
 * @param {string} input 
 */
function solution(input){
    let [T,...N] =input.split("\n").map(Number);
    let maxNumber = Math.max(...N);
    cache = Array.from({length:maxNumber+1});
    let answer = "";
    for(let element of N){
        let[zero,one,fibo]=dp(element);
        answer += `${zero} ${one}\n`
    }
    console.log(answer);
}

const path = process.platform==="linux"?"/dev/stdin":"./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
solution(input)