// 反转一个单链表。
//
// 示例:
//
//   输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
//   你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


//单向链表节点
function ListNode(val) {
  this.val = val;
  this.next = null;
}


//生成链表
class List {
  static createNode(val) {
    return new ListNode(val);
  }

  constructor() {
    this.head = null
    this.length = 0
  }

  insert(node) {
    if (this.head) {
      node.next = this.head
    }
    this.head = node;
    this.length++;
  }

  show() {
    let node = this.head;
    let str = ""
    while (node) {
      str += node.val + " > "
      node = node.next
    }
    return str;
  }
}

let list = new List()
let arr = [1, 2, 3, 4, 5, null]
arr.forEach((data, i) => {
  list.insert(List.createNode(data))
})

let reverseList = function (head) {
  let newHead = null;
  let node;
  while (head !== null) {
    node = head
    head = head.next

    node.next = newHead;
    newHead = node
  }
  return newHead;
};


console.log(list.show())
console.log(reverseList(list.head))