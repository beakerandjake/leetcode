/**
 * Given the head of a singly linked list, reverse the list, and return the
 * reversed list.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg]
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg]
 *
 *
 * Input: head = [1,2]
 * Output: [2,1]
 *
 *
 * Example 3:
 *
 *
 * Input: head = []
 * Output: []
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the list is the range [0, 5000].
 *  * -5000 <= Node.val <= 5000
 *
 *
 *
 * Follow up: A linked list can be reversed either iteratively or recursively.
 * Could you implement both?
 *
 *
 *
 * https://leetcode.com/problems/reverse-linked-list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const recursive = (head) => {
  if (!head?.next) {
    return head;
  }
  const predecessor = recursive(head.next);
  head.next.next = head;
  head.next = null;
  return predecessor;
};

const iterative = (head) => {
  let tail = head;
  while (tail?.next) {
    tail = tail.next;
  }
  let current = head;
  while (current !== tail) {
    const next = current.next;
    current.next = tail.next;
    tail.next = current;
    current = next;
  }
  return tail;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = recursive;
