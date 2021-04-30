class Node {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.data = key
    }

}

class erchashu {
    constyuctor() {
        this.root = null
    }

//新增
    insert(key) {
        let newNode = new Node(key)
        if (this.root === null) {
            this.root = key
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    //删除
    delete(key) {
        this.deleteNode(this.root, key)
    }

    insertNode(root, newNode) {
        if (root.data > newNode.data) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }


    deleteNode(root, key) {
        if (!root) {
            return false
        }
        if (root.data > key) {
            root.left = this.deleteNode(root.left, key)
            return root
        } else if (root.data < key) {
            root.right = this.deleteNode(root.right, key)
            return root
        } else {
            if (root.left === null && root.right === null) {
                root = null
                return root
            }

            if (root.left === null) {
                root = root.right
                return root
            }

            if (root.right === null) {
                root = root.left
                return root
            }

            let aux = this.minNodeDatas(root)
            root.data = aux.data
            root.right = this.deleteNode(root,aux.data)
            return root

        }
    }

    minNodeDatas(node) {
        if (node.left !== null) {
            return this.minNodeDatas(node)
        } else {
            return node
        }

    }
}