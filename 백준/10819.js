//2개씩 끊고 그 차의 절댓값이 최대가 되도록 하는 프로그램
//N은 3~8 개
//숫자는 -100~100
//8팩토리얼은? 40000 < 10^9 전체탐색 때려도 된다.
function permutator(array,r){
    let results = [];

    const permute =(arr,r,m=[]) =>{
        if(r===0){//끝까지 봤으면
            results.push(m)
        }else{
            for(let i = 0;i<arr.length;i++){
                let curr = arr.slice();//깊은 복사
                let next = curr.splice(i,1);
                permute(curr.slice(),r-1,m.concat(next));
            }
        }
    }
    permute(array,r);
    return results;
}
function caculateResult(inputArray,N){
    let result = 0;
    for(let i =0;i<=N-2;i++){
        result += Math.abs(inputArray[i]-inputArray[i+1])
    }
    return result;
}
function solution(input){
    let[N, array ] = input.split("\n");
    N = Number(N);
    let inputArray = array.split(" ").map(Number);
    let results = permutator(inputArray,inputArray.length);
    let max = 0;
    for(element of results){
        let result = caculateResult(element,N);
        if(result>max) max = result;
    }
    console.log(max)
}

const path = process.platform ==="linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
solution(input);