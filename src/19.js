/**
 * Given the head of a linked list, remove the nth node from the end of the list
 * and return its head.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg]
 *
 *
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1], n = 1
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: head = [1,2], n = 1
 * Output: [1]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the list is sz.
 *  * 1 <= sz <= 30
 *  * 0 <= Node.val <= 100
 *  * 1 <= n <= sz
 *
 *
 *
 * Follow up: Could you do this in one pass?
 *
 *
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list
 */

const twoPass = (head, n) => {
  const length = (list) => {
    let toReturn = 0;
    let current = list;
    while (current) {
      current = current.next;
      toReturn++;
    }
    return toReturn;
  };

  const removeAtIndex = (list, index) => {
    if (index === 0) {
      return list.next;
    }

    let i = 0;
    let previous;
    let current = list;
    while (i !== index) {
      previous = current;
      current = current.next;
      i++;
    }
    previous.next = current.next;
    return list;
  };

  return removeAtIndex(head, length(head) - n);
};

const onePass = (head, n) => {
  let slow = head;
  let fast = head;
  // advance fast n steps from head.
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  // if n == list length, then delete head.
  if (!fast) {
    return head.next;
  }
  // advance slow until fast is at tail (this puts slow at index n)
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export const removeNthFromEnd = onePass;
