/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head){
  
    var tmp = null;
    var newHead = null;
    while(head !== null){
      tmp = head;
      head = head.next;
      tmp.next = newHead;
      newHead = tmp;
    }
    
    return newHead;
  }