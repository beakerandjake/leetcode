/**
 * Given the head of a linked list, rotate the list to the right by k places.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const simple = (() => {
  const size = (head) => {
    let current = head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  };

  const nodeAtIndex = (head, index) => {
    let currentIndex = 0;
    let currentNode = head;
    while (currentIndex !== index) {
      currentIndex++;
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  const tail = (head) => {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    return current;
  };

  const predecessor = (head, node) => {
    if (node === head) {
      return null;
    }
    let current = head;
    while (current.next !== node) {
      current = current.next;
    }
    return current;
  };

  return (head, k) => {
    if (!head || k === 0) {
      return head;
    }

    const listSize = size(head);
    const shiftCount = k % listSize;
    if (shiftCount === 0) {
      return head;
    }

    const newHead = nodeAtIndex(head, listSize - shiftCount);
    predecessor(head, newHead).next = null;
    tail(newHead).next = head;
    return newHead;
  };
})();

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export const rotateRight = simple;
