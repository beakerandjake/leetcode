/**
 * Given the head of a linked list and an integer val, remove all the nodes of the
 * linked list that has Node.val == val, and return the new head.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg]
 *
 *
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [], val = 1
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the list is in the range [0, 104].
 *  * 1 <= Node.val <= 50
 *  * 0 <= val <= 50
 *
 *
 *
 * https://leetcode.com/problems/remove-linked-list-elements
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
export const removeElements = (head, val) => {
  if (!head) {
    return null;
  }
  if (head.val === val) {
    return removeElements(head.next, val);
  }
  head.next = removeElements(head.next, val);
  return head;
};
