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
var reverseList = function(head) {
  var ret = null;
  var current = head;
  while(current !== null) {
    var next = current.next;
    current.next = ret;
    ret = current;
    current = next;
  }
  return ret;
};
