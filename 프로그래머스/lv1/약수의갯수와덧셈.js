//약수의 갯수가 짝수면 더라고 홀수면 뺀다.
//약수의 갯수가 홀수다 -> 제곱 수
//약수의 갯수가 짝수다 -> 그냥 수
function solution(left, right) {
    var answer = 0;
    for(let i = left;i<=right;i+=1){
        if(Math.sqrt(i)%1===0){//홀수다.
            answer-=i;
        }else{
            answer+=i;
        }
    }
    console.log(answer)
    return answer;
}
solution(13,17);