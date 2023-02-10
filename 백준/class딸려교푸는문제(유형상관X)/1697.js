/**
 * 
 * @param {string} input 
 */
function solution(input){
    let [subin, brother] = input.split(" ").map(Number);
    let result = 0;
    function tp(N){
        return N*2
    }
    function move(N,front){
        if(front) return N+1;
        else return N-1;
    }

    while(subin!=brother){
        const tpSubin = tp(subin);
        const moveFrontSubin = move(subin,true);
        const moveBackSubin =move(subin,false);
        Math.abs()
    }
}