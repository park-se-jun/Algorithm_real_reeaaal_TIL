function solution(input){
    let [ numberOfNode, ...nodes] = input.split("\n"); 
    let root,left,right;
    let binaryTree ={}; 
    for(element of nodes){
        [root,left,right] = element.trim().split(" ");
        binaryTree[root] = [left,right];
    }
    let preorderList = Preorder(binaryTree,"A");
    let inorderList = Inorder(binaryTree,"A");
    let postorderList = Postorder(binaryTree,"A");
    console.log(preorderList.join(""));
    console.log(inorderList.join(""));
    console.log(postorderList.join(""));
}
function Preorder(binaryTree,rootNode){
    let list = [];
    if(rootNode===".") return list;
    list.push(rootNode);
    let left = binaryTree[rootNode][0];
    let right = binaryTree[rootNode][1];
    list.push(...Preorder(binaryTree,left));
    list.push(...Preorder(binaryTree,right));
    return list;
}
function Inorder(binaryTree,rootNode){
    let list = [];
    if(rootNode ===".") return list;
    let left = binaryTree[rootNode][0];
    let right = binaryTree[rootNode][1];
    list.push(...Inorder(binaryTree,left));
    list.push(rootNode);
    list.push(...Inorder(binaryTree,right));
    return list;
}
function Postorder(binaryTree,rootNode){
    let list = [];
    if(rootNode === ".") return list;
    let left = binaryTree[rootNode][0];
    let right = binaryTree[rootNode][1];
    list.push(...Postorder(binaryTree,left));
    list.push(...Postorder(binaryTree,right));
    list.push(rootNode);
    return list;
}
let path = process.platform === "linux"? "/dev/stdin":"./input.txt";
let input = require("fs").readFileSync(path).toString().trim();
solution(input);