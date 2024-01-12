/**
 * Given the head of a singly linked list and two integers left and right where left <= right,
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const nodeAtPosition = (head, position) => {
  let currentNode = head;
  let currentPosition = 1;
  while (currentPosition < position) {
    currentNode = currentNode.next;
    currentPosition++;
  }
  return currentNode;
};

const getPredecessor = (head, node) => {
  if (head === node) {
    return null;
  }
  let current = head;
  while (current.next && current.next !== node) {
    current = current.next;
  }
  return current;
};

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
export const reverseBetween = (head, left, right) => {
  const leftNode = nodeAtPosition(head, left);
  const rightNode = nodeAtPosition(head, right);
  let current = leftNode;
  while (current !== rightNode) {
    const next = current.next;
    current.next = rightNode.next;
    rightNode.next = current;
    current = next;
  }
  const predecessor = getPredecessor(head, leftNode);
  if (predecessor) {
    predecessor.next = rightNode;
  }
  return predecessor ? head : rightNode;
};
