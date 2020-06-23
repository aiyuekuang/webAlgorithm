function Print(pRoot) {
  if (!pRoot) {
    return [];
  }
  let queue = [],
    result = [],
    flag = true;
  //头结点推入
  queue.push(pRoot);

  while (queue.length) {
    let len = queue.length;
    let tempArr = [];
    for (let i = 0; i < len; i++) {
      let temp = queue.shift();
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

let _insertNode = Symbol("_insertNode")
let inOrderTraverseNode = Symbol("inOrderTraverseNode")
let preOrderTraverseNode = Symbol("preOrderTraverseNode")
let nextOrderTraverseNode = Symbol("nextOrderTraverseNode")
let minNode = Symbol("minNode")
let minNodeData = Symbol("minNodeData")
let maxNode = Symbol("maxNode")
let searchNode = Symbol("searchNode")
let rmLeafNode = Symbol("rmLeafNode")
let maxDepth = Symbol("maxDepth")

class BSTree {
  constructor() {
    this.root = null
    this[_insertNode] = (root, newNode) => {
      if (root.data > newNode.data) {
        if (root.left === null) {
          root.left = newNode
        } else {
          this[_insertNode](root.left, newNode)
        }
      } else {
        if (root.right === null) {
          root.right = newNode
        } else {
          this[_insertNode](root.right, newNode)
        }
      }
    }

    //中序遍历二叉树
    this[inOrderTraverseNode] = (root, callback) => {
      if (root !== null) {
        this[inOrderTraverseNode](root.left, callback)
        callback(root.data)
        this[inOrderTraverseNode](root.right, callback)
      }
    }

    //前序遍历
    this[preOrderTraverseNode] = (root, callback) => {
      if (root !== null) {
        callback(root.data)
        this[preOrderTraverseNode](root.left, callback)
        this[preOrderTraverseNode](root.right, callback)
      }
    }
    //后序遍历
    this[nextOrderTraverseNode] = (root, callback) => {
      if (root !== null) {
        this[nextOrderTraverseNode](root.right, callback)
        callback(root.data);
        this[nextOrderTraverseNode](root.left, callback)
      }
    }

    this[minNode] = (node) => {
      if (node.left !== null) {
        return this[minNode](node.left)
      } else {
        return node.data
      }
    }

    this[minNodeData] = (node) => {
      if (node.left !== null) {
        return this[minNodeData](node.left)
      } else {
        return node
      }
    }

    this[maxNode] = (node) => {
      if (node) {
        while (node && node.right !== null) {
          node = node.right
        }
        return node.data
      }
      return null
    }

    this[searchNode] = (node, value) => {
      if (node === null) {
        return false
      }

      if (node.data > value) {
        return this[searchNode](node.left, value)
      } else if (node.data < value) {
        return this[searchNode](node.right, value)
      } else if (node.data === value) {
        return true
      }
    }

    this[rmLeafNode] = (node, value) => {
      if (node === null) {
        return false
      }

      if (node.data > value) {
        node.left = this[rmLeafNode](node.left, value)
        return node;
      } else if (node.data < value) {
        node.right = this[rmLeafNode](node.right, value)
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }

        if (node.left === null) {
          node = node.right
          return node;
        } else if (node.right === null) {
          node = node.left
          return node;
        }

        let aux = this[minNodeData](node)
        node.data = aux.data;
        node.right = this[rmLeafNode](node.right, aux.data)
        return node;
      }
    }

    this[maxDepth] = (root) => {
      if (root === null) {
        return 0
      }
      let leftDeep = this[maxDepth](root.left);
      let rightDeep = this[maxDepth](root.right);
      return Math.max(leftDeep, rightDeep) + 1
    }


  }

  //增
  insert(data) {
    let newNode = new Node(data)

    if (this.root === null) {
      this.root = newNode
    } else {
      this[_insertNode](this.root, newNode);
    }
  }

  //中序遍历，从小到大排
  inOrderTraverse(callback) {
    this[inOrderTraverseNode](this.root, callback)
  }

  preOrderTraverse(callback) {
    this[preOrderTraverseNode](this.root, callback)
  }

  nextOrderTraverse(callback) {
    this[nextOrderTraverseNode](this.root, callback)
  }

  min() {
    return this[minNode](this.root)
  }

  max() {
    return this[maxNode](this.root)
  }

  search(value) {
    return this[searchNode](this.root, value)
  }

  rmLeaf(value) {
    this.root = this[rmLeafNode](this.root, value)
  }

  //查询树的深度
  maxDepth(root) {
    return this[maxDepth](root)
  }

}

let arr = [20, 7, 11, 6, 47, 867, 45, 787, 454, 343, 676]
let d = new BSTree();
arr.forEach((data, i) => {
  d.insert(data)
})
console.log(Print(d.root))
// d.inOrderTraverse((data) => {
//     console.log(data)
// })
// d.nextOrderTraverse((data) => {
//     console.log(data)
// })
d.rmLeaf(343)
console.log(Print(d.root))
console.log(d.maxDepth(d.root))