/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const twoPass = (() => {
  const size = (head) => {
    let toReturn = 0;
    let current = head;
    while (current) {
      toReturn++;
      current = current.next;
    }
    return toReturn;
  };

  const deleteAtIndex = (head, index) => {
    if (index === 1) {
      return head.next;
    }
    let currentIndex = 1;
    let predecessor = head;
    while (++currentIndex !== index) {
      predecessor = predecessor.next;
    }
    predecessor.next = predecessor.next.next;
    return head;
  };

  return (head, n) => deleteAtIndex(head, size(head) - n + 1);
})();

const onePass = (() => {
  const nodeAt = (head, position) => {
    let currentNode = head;
    let currentPosition = 0;
    while (currentPosition++ !== position) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  return (head, n) => {
    let left = head;
    let right = nodeAt(head, n);

    if (!right) {
      return head.next;
    }

    while (right.next !== null) {
      right = right.next;
      left = left.next;
    }

    left.next = left.next.next;
    return head;
  };
})();

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export const removeNthFromEnd = onePass;
