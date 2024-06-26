/**
 * Given the head of a linked list, reverse the nodes of the list k at a time, and
 * return the modified list.
 *
 * k is a positive integer and is less than or equal to the length of the linked
 * list. If the number of nodes is not a multiple of k then left-out nodes, in the
 * end, should remain as it is.
 *
 * You may not alter the values in the list's nodes, only nodes themselves may be
 * changed.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg]
 *
 *
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [2,1,4,3,5]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg]
 *
 *
 * Input: head = [1,2,3,4,5], k = 3
 * Output: [3,2,1,4,5]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the list is n.
 *  * 1 <= k <= n <= 5000
 *  * 0 <= Node.val <= 1000
 *
 *
 *
 * Follow-up: Can you solve the problem in O(1) extra memory space?
 *
 *
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const usingExtraSpace = (() => {
  // returns the length of the list.
  const length = (list) => (list ? 1 + length(list.next) : 0);

  // reverses the list in place and returns the new head.
  const reverse = (node) => {
    if (!node?.next) {
      return node;
    }
    const newHead = reverse(node.next);
    node.next.next = node;
    node.next = null;
    return newHead;
  };

  // removes the first x nodes of the list and returns the new head of the list.
  const take = (node, count) => {
    if (!node) {
      return node;
    }
    if (count === 1) {
      const toReturn = node.next;
      node.next = null;
      return toReturn;
    }
    return take(node.next, count - 1);
  };

  // divides the list into k groups.
  const divide = (head, k) => {
    const results = [];
    let current = head;
    while (current) {
      const next = take(current, k);
      results.push(current);
      current = next;
    }
    return results;
  };

  // returns the last node of the list.
  const tail = (node) => {
    if (!node?.next) {
      return node;
    }
    return tail(node.next);
  };

  return (head, k) => {
    // divide into k lists and reverse each according to rules
    const groups = divide(head, k).map((group) =>
      length(group) === k ? reverse(group) : group,
    );
    // stitch the groups back together.
    for (let i = 0; i < groups.length - 1; i++) {
      tail(groups[i]).next = groups[i + 1];
    }
    return groups[0];
  };
})();

const withoutExtraSpace = (() => {
  // reverses the list in place and returns the new head.
  const reverse = (node) => {
    if (!node?.next) {
      return node;
    }
    const newHead = reverse(node.next);
    node.next.next = node;
    node.next = null;
    return newHead;
  };

  return (head, k) => {
    const divideAndReverse = (headOfGroup, current, remaining) => {
      if (!current || !remaining) {
        return headOfGroup;
      }
      // at the end of a k-group
      if (remaining === 1) {
        // break the link to the next k-group
        const next = current.next;
        current.next = null;
        // reverse this k-group, making current -> new head and old head -> new tail.
        reverse(headOfGroup);
        // attach new tail to new k-group
        headOfGroup.next = divideAndReverse(next, next, k);
        return current;
      }
      // still in a k-group, keep iterating.
      return divideAndReverse(headOfGroup, current.next, remaining - 1);
    };
    return divideAndReverse(head, head, k);
  };
})();

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export const reverseKGroup = withoutExtraSpace;
