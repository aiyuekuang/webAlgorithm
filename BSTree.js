function Print(pRoot) {
    if (!pRoot) {
        return [];
    }
    var queue = [],
      result = [],
      flag = true;
    //头结点推入
    queue.push(pRoot);

    while (queue.length) {
        var len = queue.length;
        var tempArr = [];
        for (var i = 0; i < len; i++) {
            var temp = queue.shift();
            tempArr.push(temp.data);
            if (temp.left) {
                queue.push(temp.left);
            }
            if (temp.right) {
                queue.push(temp.right);
            }
        }
        if (!flag) {
            tempArr.reverse();
        }
        flag = !flag;
        result.push(tempArr);
    }
    return result;
}

class Node {
    constructor(key) {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor() {
        this.root = null
    }

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

let arr = [20, 7, 11, 6, 47, 867, 45, 787, 454, 343, 676]
let d = new BSTree();
arr.forEach((data, i) => {
    d.insert(data)
})
console.log(d.root);
console.log(Print(d.root));