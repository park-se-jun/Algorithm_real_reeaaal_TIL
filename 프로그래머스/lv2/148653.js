//최소한의 버튼 DP or 완전 탐색 느낌이 난다잉
//층 수가 10^8 -> 시간복잡도 n 까지 OK
//0층으로 가는 최소 수

//+ 가 될 수도 , - 가 될 수도 있다.
    //10의 배수로 가장 가까이 만든다 -> 그리고 비교한다.
    //10의 배수로 만드는 2가지 방법 + 를 ~ 만큼 하거나 - 를 ~~ 만큼 한다.
    //1의 자리 수를 가장 뒤로 미룰 수 있다.
    //일단 무지성 빼기가 가능!(적당한 선에서)
    //----- 이렇게 하면 안됨 -----
    //3999 같은 경우는 위 방식대로면 3+ 9+ 9+ 2를 해야 되지만 정상적으로 나오기 위해선 1 + 4 만 하면 됨
    //매 자리수 마다 판별을해야 한다.
    //1의 자리 에서 1번,10의 자리에서 1번 ... 마지막 자리에서 1번
    //99999 의 경우 2번이면 됨
    //99990도 2번이면 됨
    //999도 2번이면 됨
    //9도 2번이면 됨
    //비슷한 논리로 1600,160,16 모두 같은 횟수만 필요하다.
    //0만 만들면 ㅈ도 상관 X 됨
    //0 만드는 데 최소로 들기 + 재귀?
    //16이면 4 + 2
    //2554면 4 + 5 + 5 + 2
    //23969 면 1 + 3 +
    function dp(n,m){ //n층에서 m층으로 가는 최소경우의 수 <- 이걸로는 못풀듯 (위로 가는것도 있으니까)
    
    
    }
    function solution(storey) {
        let answer = 0;
        while(storey!=0){
            const lastNumber=storey%10;
            if(lastNumber < 5){
                answer += lastNumber;
                storey = Math.floor(storey/10);
            }else if(lastNumber === 5){
                answer += lastNumber;    
                const lastTwoNumber = storey%100;
                if(lastTwoNumber >= 55){
                    storey = Math.ceil(storey/10);
                }else{
                    storey = Math.floor(storey/10);
                }
            }else{
                answer += 10-lastNumber;
                storey = Math.ceil(storey/10);
            }
        }
        return answer;
    }
    
    function solutionTrial2(storey) {
        let answer = 0;
        while(storey!=0){
            const lastNumber=storey%10;
            if(lastNumber <= 5){
                answer += lastNumber;
                storey = Math.floor(storey/10);
            }else{
                answer += 10-lastNumber;
                storey = Math.ceil(storey/10);
            }
        }
        return answer;
    }
    
    
    function solutionTrial1(storey){
        const numbers = storey.toString().split("").map(Number)
        var answer = 0;
    
        for(let i = 0; i<numbers.length - 1 ; i ++){
            answer += numbers[i];
        }
        if(numbers[numbers.length-1]<=5){
            answer += numbers[numbers.length-1];
        }else{
            answer += 11-numbers[numbers.length-1]
        }
        return answer;
    }