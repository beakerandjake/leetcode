/**
 * You are given the head of a non-empty linked list representing a non-negative
 * integer without leading zeroes.
 *
 * Return the head of the linked list after doubling it.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2023/05/28/example.png]
 *
 *
 * Input: head = [1,8,9]
 * Output: [3,7,8]
 * Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2023/05/28/example2.png]
 *
 *
 * Input: head = [9,9,9]
 * Output: [1,9,9,8]
 * Explanation: The figure above corresponds to the given linked list which represents the number 999. Hence, the returned linked list reprersents the number 999 * 2 = 1998.
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the list is in the range [1, 104]
 *  * 0 <= Node.val <= 9
 *  * The input is generated such that the list represents a number that does not
 *    have leading zeros, except the number 0 itself.
 *
 *
 *
 * https://leetcode.com/problems/double-a-number-represented-as-a-linked-list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// traverses the list in reverse order invoking the visit fn on each node.
const traverseR = (node, visitFn) => {
  if (!node) {
    return;
  }
  traverseR(node.next, visitFn);
  visitFn(node.val);
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const doubleIt = (head) => {
  const sentinel = new ListNode();
  let carry = 0;
  traverseR(head, (val) => {
    const doubled = val * 2 + carry;
    carry = doubled >= 10 ? 1 : 0;
    sentinel.next = new ListNode(doubled % 10, sentinel.next);
  });
  if (carry) {
    sentinel.next = new ListNode(1, sentinel.next);
  }
  return sentinel.next;
};
