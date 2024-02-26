/**
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg]
 *
 *
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [4,5,1,2,3]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg]
 *
 *
 * Input: head = [0,1,2], k = 4
 * Output: [2,0,1]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the list is in the range [0, 500].
 *  * -100 <= Node.val <= 100
 *  * 0 <= k <= 2 * 109
 *
 *
 *
 * https://leetcode.com/problems/rotate-list
 */

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const findTail = (head) => {
  let count = 1;
  let previous = head;
  let current = head.next;
  while (current) {
    previous = current;
    current = current.next;
    count++;
  }
  return { tail: previous, length: count };
};

const nodeAtIndex = (list, index) =>
  index <= 0 ? list : nodeAtIndex(list.next, index - 1);

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export const rotateRight = (head, k) => {
  if (!head) {
    return null;
  }

  const { length, tail } = findTail(head);
  const kActual = k % length;
  // bail if list is not modified by rotations.
  if (kActual === 0) {
    return head;
  }
  tail.next = head;
  const newTail = nodeAtIndex(head, length - kActual - 1);
  const newHead = newTail.next;
  newTail.next = null;
  return newHead;
};
