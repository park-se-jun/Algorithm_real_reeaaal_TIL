//레지스터에 저장되는 값 0~9999
//각 자리수를 d1,d2,d3,d4 라고 하자
//D: n을 2배 한다 9999이상일 경우 10000으로 나눈다
let register = 0
function D(){
    register =  2*register%10000
}
//S : n에서 1을 뺀 결과를 레지스터에 저장한다.
function S(){
    if(register === 0) register = 9999;
    else register -= 1;
}
//L 각 자리수를 왼편으로 회전시켜 그 결과를 레지스터에 저장한다.
// d1,d2,d3,d4 의 L 연산 이후 결과 = d2,d3,d4,d1
function L(){
    let d1 = Math.floor(register/1000);
    let rest = register%1000;
    register = rest*10 + d1;
}
//R은 L 의 반대이다
function R(){
    let d4 = register%10;
    let rest = Math.floor(register/10);
    register = d4*1000 + rest;
}

//숫자 A => B로 바꾸는 최소한의 명령어를 생성하는 프로그램
// 최악의 경우에도 10000번의 명령어면 OK임
function solution(input){
    let[T,...testCases] = input.split("\n");
    T=Number(T);
    testCases = testCases.map(element => element.split(" ").map(Number))
}