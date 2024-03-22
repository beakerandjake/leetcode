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

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const reverseAndCompare = (() => {
  const copy = (list) => (list ? new ListNode(list.val, copy(list.next)) : null);

  const reverse = (list) => {
    if (!list?.next) {
      return list;
    }
    const predecessor = reverse(list.next);
    list.next.next = list;
    list.next = null;
    return predecessor;
  };

  const equals = (a, b) => {
    if (!a && !b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    return a.val === b.val && equals(a.next, b.next);
  };

  return (head) => equals(reverse(copy(head)), head);
})();

const reverseMiddleHalfAndCompare = (() => {
  const middle = (list) => {
    if (!list) {
      return null;
    }
    let slow = list;
    let fast = list;
    while (fast?.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };

  const reverse = (list) => {
    if (!list?.next) {
      return list;
    }
    const predecessor = reverse(list.next);
    list.next.next = list;
    list.next = null;
    return predecessor;
  };

  return (head) => {
    let a = head;
    let b = reverse(middle(head));
    while (b) {
      if (a.val !== b.val) {
        return false;
      }
      a = a.next;
      b = b.next;
    }
    return true;
  };
})();

const reverseIterationAndCompare = (() => {
  const iterateReverse = (list, visitFn) => {
    if (!list) {
      return;
    }
    iterateReverse(list.next, visitFn);
    visitFn(list.val);
  };

  return (list) => {
    if (!list) {
      return false;
    }

    let current = list;
    let isValid = true;
    iterateReverse(list, (value) => {
      if (current.val !== value) {
        isValid = false;
      }
      current = current.next;
    });
    return isValid;
  };
})();

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const isPalindrome = reverseAndCompare;
