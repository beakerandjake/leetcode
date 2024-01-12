/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
export const partition = (head, x) => {
  const beforeSentinel = new ListNode();
  const afterSentinel = new ListNode();

  let current = head;
  let beforeTail = beforeSentinel;
  let afterTail = afterSentinel;
  while (current) {
    const newNode = new ListNode(current.val);
    if (current.val < x) {
      beforeTail.next = newNode;
      beforeTail = newNode;
    } else {
      afterTail.next = newNode;
      afterTail = newNode;
    }
    current = current.next;
  }

  if (!beforeSentinel.next) {
    return afterSentinel.next;
  }
  if (!afterSentinel.next) {
    return beforeSentinel.next;
  }

  beforeTail.next = afterSentinel.next;
  return beforeSentinel.next;
};
