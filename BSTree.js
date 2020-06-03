class Node {
    constructor(key) {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor() {
    }

    root = null

    _insertNode(root, newNode) {
        if (root.data > newNode.data) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this._insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this._insertNode(root.right, newNode)
            }
        }
    }

    insert(data) {
        let newNode = new Node(data)

        if (this.root === null) {
            this.root = newNode
        } else {
            this._insertNode(this.root, newNode);
        }
    }
}

let arr = [5, 7, 11, 6, 47, 867, 45, 787, 454, 343, 676]
let d = new BSTree();
arr.forEach((data, i) => {
    console.log(66,data)
    d.insert(data)
})
console.log(d);