/**
 * You are given the head of a singly linked-list. The list can be represented as:
 *
 *
 * L0 → L1 → … → Ln - 1 → Ln
 *
 *
 * Reorder the list to be on the following form:
 *
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 *
 *
 * You may not modify the values in the list's nodes. Only nodes themselves may be
 * changed.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg]
 *
 *
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg]
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the list is in the range [1, 5 * 104].
 *  * 1 <= Node.val <= 1000
 *
 *
 *
 * https://leetcode.com/problems/reorder-list
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

// returns the predecessor to the middle node of the list.
const middlePredecessor = (list) => {
  let pred = list;
  let slow = list;
  let fast = list;
  while (fast?.next) {
    pred = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  return pred;
};

// reverses the list in place and returns the new head of the list.
const reverse = (list) => {
  if (!list?.next) {
    return list;
  }
  const predecessor = reverse(list.next);
  list.next.next = list;
  list.next = null;
  return predecessor;
};

// returns a new list that results from merging lists a and b.
// merges in order: a0,b0,...,aN,bN
const merge = (a, b) => {
  const sentinel = new ListNode(null);
  let current = sentinel;
  let aCurrent = a;
  let bCurrent = b;
  while (aCurrent && bCurrent) {
    const aNext = aCurrent.next;
    const bNext = bCurrent.next;

    current.next = aCurrent;
    current.next.next = bCurrent;
    current = current.next.next;

    aCurrent = aNext;
    bCurrent = bNext;
  }
  // append any remaining elements of larger list (if any).
  current.next = aCurrent ? aCurrent : bCurrent;
  return sentinel.next;
};

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
export const reorderList = (head) => {
  if (!head?.next) {
    return head;
  }
  // find the middle point of the list and divide the list into two halves.
  // ensure the right half is reversed so we can merge the two halves correctly.
  const mPred = middlePredecessor(head);
  const rightHalf = reverse(mPred.next);
  mPred.next = null;
  return merge(head, rightHalf);
};
