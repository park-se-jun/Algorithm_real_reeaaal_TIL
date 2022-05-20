// 실패율 구하기 => 클리어 못함/스테이지도달
function solution(N, stages) {//N 은 스테이지 갯수,사용자가 멈춰있는 스테이지 => 배열로 주어짐, 실패율이 높은순으로 정렬해서 return 
    let stagedPersons = new Array(N+2).fill(0);
    let failureRate = new Array(N+1);
    var answer = [];
    for(element of stages){
        for(let i =1;i<=element;i++){
            stagedPersons[i]+=1;
        }

    }
    for(let i = 1; i<=N;i+=1){
        failureRate[i] = [(stagedPersons[i]-stagedPersons[i+1])/stagedPersons[i],i];
    }
    
    failureRate.sort((a,b)=>{
        return b[0]-a[0]
    })
    for(let i=0;i<failureRate.length-1;i+=1){
        answer.push(failureRate[i][1]);
    }
    // console.log(answer)
    return answer;
}
solution(5,[2, 1, 2, 6, 2, 4, 3, 3])