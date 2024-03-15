/**
 * Given the head of a linked list, we repeatedly delete consecutive sequences of
 * nodes that sum to 0 until there are no such sequences.
 *
 * After doing so, return the head of the final linked list.  You may return any
 * such answer.
 *
 *
 *
 * (Note that in the examples below, all sequences are serializations of ListNode
 * objects.)
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,-3,3,1]
 * Output: [3,1]
 * Note: The answer [1,2,1] would also be accepted.
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2,3,-3,4]
 * Output: [1,2,4]
 *
 *
 * Example 3:
 *
 *
 * Input: head = [1,2,3,-3,-2]
 * Output: [1]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The given linked list will contain between 1 and 1000 nodes.
 *  * Each node in the linked list has -1000 <= node.val <= 1000.
 *
 *
 *
 * https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// returns the fist node which results in running sum (from head -> node) of zero.
const lookForward = (head, sum) =>
  !head || head.val + sum === 0 ? head : lookForward(head.next, head.val + sum);

export const removeZeroSumSublists = (head) => {
  if (!head) {
    return null;
  }
  // scan forward from head for a node that results in a running sum of zero.
  const zeroNode = lookForward(head, 0);
  // if node is found that causes a zero sum, then then remove from the resulting list.
  if (zeroNode) {
    return removeZeroSumSublists(zeroNode.next);
  }
  // this node does not lead to a zero sum (but its next node might, so check it).
  head.next = removeZeroSumSublists(head.next);
  return head;
};


