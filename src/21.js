/**
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists into one sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg]
 *
 *
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 *
 * Example 2:
 *
 *
 * Input: list1 = [], list2 = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in both lists is in the range [0, 50].
 *  * -100 <= Node.val <= 100
 *  * Both list1 and list2 are sorted in non-decreasing order.
 *
 *
 *
 * https://leetcode.com/problems/merge-two-sorted-lists
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

/**
 * @param {ListNode} a
 * @param {ListNode} b
 * @return {ListNode}
 */
export const mergeTwoLists = (a, b) => {
  if (!a) {
    return b;
  }
  if (!b) {
    return a;
  }
  return a.val < b.val
    ? new ListNode(a.val, mergeTwoLists(a.next, b))
    : new ListNode(b.val, mergeTwoLists(a, b.next));
};
