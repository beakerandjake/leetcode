/**
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 * Return the linked list sorted as well.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const usingMap = (() => {
  const getFrequencyMap = (head) => {
    const toReturn = new Map();
    let current = head;
    while (current) {
      toReturn.set(current.val, (toReturn.get(current.val) || 0) + 1);
      current = current.next;
    }
    return toReturn;
  };

  return (head) => {
    const frequencyMap = getFrequencyMap(head);
    let finalHead;
    let currentTail;
    let current = head;
    while (current) {
      const frequency = frequencyMap.get(current.val);
      if (frequency === 1) {
        if (!finalHead) {
          finalHead = current;
          currentTail = finalHead;
        } else {
          currentTail.next = current;
          currentTail = current;
        }
      } else if (currentTail) {
        currentTail.next = null;
      }
      current = current.next;
    }
    return finalHead || null;
  };
})();

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const deleteDuplicates = usingMap;
