/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const insertAfterTail = (head) => {
  const getTail = (node) => {
    let toReturn = node;
    while (toReturn.next) {
      toReturn = toReturn.next;
    }
    return toReturn;
  };

  if (!head?.next) {
    return head;
  }
  const tail = getTail(head);
  let currentHead = head;
  while (currentHead && currentHead !== tail) {
    const nextHead = currentHead.next;
    currentHead.next = tail.next;
    tail.next = currentHead;
    currentHead = nextHead;
  }
  return tail;
};

const setToPreviousIterative = (head) => {
  let previous = null;
  let current = head;
  while (current) {
    const tempNext = current.next;
    current.next = previous;
    previous = current;
    current = tempNext;
  }
  return previous;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = setToPreviousIterative;
