class LinkedListNode{
    constructor(data){
        this.prev = null;
        this.next = null;
    }
}
class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.cursur = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    moveCursurFront(){
        this.cursur = this.cursur.prev;
    }
    moveCursurBack(){
        this.cursur = this.cursur.next;
    }
    addCursurFront(value){

    }
    addCursurBack(value){

    }
    deleteCursur(){
        let tmpNode =this.cursur;
        try{
            tmpNode.prev.next = tmpNode.next;
            tmpNode.next.prev = tmpNode.prev;    
        } catch(e){
            if(tmpNode.prev===null){//가장 앞이면

            }else if(tmpNode.next === null){// 가장 뒤면
                

            }
        }
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