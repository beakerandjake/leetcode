/**
 * Given the head of a singly linked list, return true if it is a palindrome or
 * false otherwise.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg]
 *
 *
 * Input: head = [1,2,2,1]
 * Output: true
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg]
 *
 *
 * Input: head = [1,2]
 * Output: false
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the list is in the range [1, 105].
 *  * 0 <= Node.val <= 9
 *
 *
 *
 * Follow up: Could you do it in O(n) time and O(1) space?
 *
 *
 *
 * https://leetcode.com/problems/palindrome-linked-list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const iterateReverse = (head, visitFn) => {
  if (!head) {
    return;
  }
  iterateReverse(head.next, visitFn);
  visitFn(head);
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const isPalindrome = (head) => {
  let toReturn = true;
  let current = head;
  iterateReverse(head, (node) => {
    if (current.val !== node.val) {
      toReturn = false;
    }
    current = current.next;
  });
  return toReturn;
};
