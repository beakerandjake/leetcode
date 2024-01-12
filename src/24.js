/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 */

const recursive = (head) => {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  const oldHead = head;
  const newHead = head.next;
  oldHead.next = recursive(newHead.next);
  newHead.next = oldHead;
  return newHead;
};

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
export const swapPairs = (head) => recursive(head);
