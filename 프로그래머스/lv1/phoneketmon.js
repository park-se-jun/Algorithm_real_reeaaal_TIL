//N 마리 중 N/2마릭 가져가기

/** 폰켓몬을 고르는 방법(절반을 가져갈 수있음)
 *  -> 최대한 많은 종류의 폰켓몬을 선택하는 방법, 그떄의 폰켓몬 종류 번호의 갯수
 */
function solution(nums) {
    var answer = 0;
    let canIget = nums.length/2;
    let phoneketmonSet = new Set(nums);
    let diffMonster = phoneketmonSet.size
    if(diffMonster>=canIget){
        answer = canIget;
    }else{
        answer = diffMonster;
    }
    return answer;
}