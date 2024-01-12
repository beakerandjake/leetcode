/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export const mergeTwoLists = (a, b) => {
  if (!a || !b) {
    return a || b;
  }

  const head = a.val < b.val ? a : b;
  head.next = mergeTwoLists(head.next, head === a ? b : a);
  return head;
};
