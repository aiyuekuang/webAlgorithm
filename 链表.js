class Node {
  constructor(key) {
    this.key = key
    this.next = null
  }
}

class List {
  constructor(props) {
    this.head = null
    this.length = 0
  }

  static createNode(key) {
    return new Node(key);
  }

  show(node) {
    if(!node){
      return ""
    }
    return node && node.key + " > " + this.show(node.next);
  }

  insert(node) {
    if (this.head) {
      node.next = this.head
    } else {
      node.next = null
    }
    this.head = node
    this.length++
  }

  find(key, node = this.head) {
    if (node && key === node.key) {
      return node
    } else {
      return this.find(key, node.next)
    }
  }

  delete(key) {
    let node = this.head;
    let pre = null;

    while (node) {
      if (key === node.key) {
        if (node.next === null) {
          pre.next = null
        } else if (pre === null) {
          this.head = node.next
        } else {
          pre.next = node.next
        }
        this.length--;
      }
      pre = node
      node = node.next;
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6];

const a = new List()
arr.forEach((data, i) => {
  a.insert(List.createNode(data))
})
//
console.log(a.length, a.head)
console.log(a.show(a.head))
// console.log(a.find(3))
// a.delete(1)
// console.log(a.length, a.head)

let arr2 = [7, 8, 9, 10, 11, 12];
const b = new List()
arr2.forEach((data, i) => {
  b.insert(List.createNode(data))
})


//合并2个链表
function marge(node1, node2) {
  let c = new List();
  let switchs = true;
  while (node1 || node2) {
    if (switchs) {
      if (node1) {
        c.insert(List.createNode(node1.key))
        node1 = node1.next;
      }
      switchs = false
    } else {
      if (node2) {
        c.insert(List.createNode(node2.key))
        node2 = node2.next;
      }
      switchs = true
    }
  }
  return c;
}

let d = marge(a.head, b.head)
console.log(d.length, d.head)

//两两交换链表
let swapPairs = function (head) {
  if(!head){
    return head
  }

  let after = head.next;
  let next = after.next;

  after.next = head;
  head.next = swapPairs(next)
  return after;
};

console.log(a.show(swapPairs(a.head)))