function solution(record) {
    const uidMap = new Map()
    var answer = [];
    const result=[];
    for(element of record){
        let [method, uid, nickname] = element.split(" ");
        if(method === "Enter"){
            uidMap.set(uid,nickname);
            answer.push(["님이 들어왔습니다.",uid]);
        }
        if(method === "Leave"){
            answer.push(["님이 나갔습니다.",uid]);
            
        }
        if(method === "Change"){
            uidMap.set(uid,nickname);            
        }
    }
    for(let[method,uid] of answer){
        result.push(`${uidMap.get(uid)}${method}`)
    }
    console.log(result)
    return result;
}