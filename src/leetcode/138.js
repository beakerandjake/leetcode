/**
 * A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
 * Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. 
 * Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. 
 * None of the pointers in the new list should point to nodes in the original list.
 * 
 * For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

 * Return the head of the copied linked list.
 * 
 * The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
 * 
 *     val: an integer representing Node.val
 *     random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
 * 
 * Your code will only be given the head of the original linked list.
 */

/**
 * Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
class Node {
  constructor(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

const nodeAt = (head, index) => {
  let currentNode = head;
  let currentIndex = 0;
  while (currentIndex !== index) {
    currentIndex++;
    currentNode = currentNode.next;
  }
  return currentNode;
};

const indexOf = (head, node) => {
  let current = head;
  let index = 0;
  while (current !== node) {
    index++;
    current = current.next;
  }
  return index;
};

const copyList = (head) => {
  const dest = new Node(0);
  let srcCurrent = head;
  let destCurrent = dest;
  while (srcCurrent) {
    destCurrent.next = new Node(srcCurrent.val, null, null);
    srcCurrent = srcCurrent.next;
    destCurrent = destCurrent.next;
  }
  return dest.next;
};

/**
 * @param {Node} head
 * @return {Node}
 */
export const copyRandomList = (head) => {
  const copy = copyList(head);
  let srcCurrent = head;
  let destCurrent = copy;
  while (srcCurrent) {
    if (srcCurrent.random !== null) {
      destCurrent.random = nodeAt(copy, indexOf(head, srcCurrent.random));
    }
    srcCurrent = srcCurrent.next;
    destCurrent = destCurrent.next;
  }
  return copy;
};
