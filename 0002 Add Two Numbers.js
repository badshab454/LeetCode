/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode();
    let cursor = head;
    let carry = 0;
    while (l1 || l2 || carry) {
      cursor.next = new ListNode();
      cursor = cursor.next;
      let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = val >= 10 ? 1 : 0;
      cursor.val = val % 10;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
    return head.next;
  };