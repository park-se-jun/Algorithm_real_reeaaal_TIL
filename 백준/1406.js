class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
    addNext(value){
        let node = new Node(value);
        if(this.next!=null){
            let nextnext = this.next;
            this.next = node;
            this.next.prev = this;
            this.next.next =nextnext;
            this.next.next.prev = this.next;
        }else{
            this.next = node;
            this.next.prev = this;
        }

        return this.next;
    }
    addPrev(value){
        let node = new Node(value);
        if(this.prev!=null){
            let prevprev = this.prev;
            this.prev = node;
            this.prev.next = this;
            this.prev.prev = prevprev;
            this.prev.prev.next = this.prev;
        }else{
            this.prev = node;
            this.prev.next = this;
        }

        return this.prev;
    }
    getPrev(){//L
        if(this.prev === null) return this;
        return this.prev;
    }
    getNext(){//D
        if(this.next === null) return this;
        return this.next;
    }
    deletePrev(){//B
        let prevprev = this.prev.getPrev();
        this.prev= prevprev;
        this.prev.next = this;
        return this;
    }
    P(value){//P
        this.addPrev(value);
        return this;
    }
    printAll(){
        let cursur = this;
        let result = "";
        while(cursur.getPrev()===cursur){
            cursur=cursur.getPrev();
        }
        while(cursur.getNext()===cursur){
            result += cursur.value;
            cursur = cursur.getNext();
        }
        return result;
    }
}
function solution(input){
    let[value,N,...remain]= input.split("\n")
    let cursur;
    for(let element of value.trim().split("")){
        if(cursur===undefined){
            cursur = new Node(element);
        }else{
            cursur = cursur.addNext(element);
        }
    }
    for(element of remain){
        let [method, char] = element.split(" ").map(x=>x.trim());
        switch(method){
            case "L":
                cursur = cursur.getPrev();
                break;
            case "D":
                cursur = cursur.getNext();
                break;
            case "B":
                cursur = cursur.deletePrev();
                break;
            case "P":
                cursur = cursur.P(char);
                break;
            default:
                break;
        }
    }
    console.log(cursur.printAll());
}
let path = process.platform === "linux"?"/dev/stdin":"./input.txt";
let input = require("fs").readFileSync(path).toString().trim();
solution(input)