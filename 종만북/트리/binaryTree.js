class binaryTree {
    constructor(value){
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
    }
    insertLeft(value){
        this.leftNode = new binaryTree(value);
        return this.leftNode;
    }
    insertRight(value){
        this.rightNode = new binaryTree(value);
        return this.rightNode;
    }
}
function Preorder(rootNode){
    if(rootNode == null) return [];
    let list = [];
    list.push(rootNode.value);
    list.push(...Preorder(rootNode.leftNode));
    list.push(...Preorder(rootNode.rightNode));
    return list;
}
function Inorder(rootNode){
    if(rootNode==null) return;
    let list = [];
    list.push(...Inorder(rootNode.leftNode));
    list.push(rootNode.value);
    list.push(...Inorder(rootNode.rightNode));
}
function Postorder(rootNode){
    if(rootNode == null) return;
    let list = [];
    list.push(...Postorder(rootNode.leftNode));
    list.push(...Postorder(rootNode.rightNode));
    list.push(rootNode.value);
}