/**
 * Given the head of a singly linked list, group all the nodes with odd indices
 * together followed by the nodes with even indices, and return the reordered list.
 *
 * The first node is considered odd, and the second node is even, and so on.
 *
 * Note that the relative order inside both the even and odd groups should remain
 * as it was in the input.
 *
 * You must solve the problem in O(1) extra space complexity and O(n) time
 * complexity.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg]
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [1,3,5,2,4]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg]
 *
 *
 * Input: head = [2,1,3,5,6,4,7]
 * Output: [2,3,6,7,1,5,4]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the linked list is in the range [0, 104].
 *  * -106 <= Node.val <= 106
 *
 *
 *
 * https://leetcode.com/problems/odd-even-linked-list
 */

// class ListNode {
//   constructor(val, next) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const oddEvenList = (head) => {
  let odd = head;
  let even = head?.next;
  // less than three nodes is already sorted.
  if (!even?.next) {
    return head;
  }
  const evenHead = even;
  let index = 3;
  let current = even.next;
  while (current) {
    const { next } = current;
    if (index % 2 === 0) {
      even.next = current;
      even = even.next;
    } else {
      odd.next = current;
      odd = odd.next;
    }
    current = next;
    index++;
  }
  even.next = null;
  odd.next = evenHead;
  return head;
};
