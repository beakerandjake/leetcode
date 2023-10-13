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

// const usingMap = (() => {
//   const getFrequencyMap = (head) => {
//     const toReturn = new Map();
//     let current = head;
//     while (current) {
//       toReturn.set(current.val, (toReturn.get(current.val) || 0) + 1);
//       current = current.next;
//     }
//     return toReturn;
//   };

//   return (head) => {
//     const frequencyMap = getFrequencyMap(head);
//     let finalHead;
//     let currentTail;
//     let current = head;
//     while (current) {
//       const frequency = frequencyMap.get(current.val);
//       if (frequency === 1) {
//         if (!finalHead) {
//           finalHead = current;
//           currentTail = finalHead;
//         } else {
//           currentTail.next = current;
//           currentTail = current;
//         }
//       } else if (currentTail) {
//         currentTail.next = null;
//       }
//       current = current.next;
//     }
//     return finalHead || null;
//   };
// })();

const withoutSentinel = (() => {
  const consumeDuplicates = (node) => {
    let current = node;
    let consumeCount = 0;
    while (current && current.val === node.val) {
      consumeCount++;
      current = current.next;
    }
    return { node: current, consumeCount };
  };

  return (head) => {
    // ignore empty or one node lists.
    if (!head?.next) {
      return head;
    }
    let finalHead;
    let currentTail;
    let currentNode = head;
    while (currentNode) {
      const next = consumeDuplicates(currentNode);
      // current node was not a duplicate.
      if (next.consumeCount === 1) {
        // set current node as head.
        if (!finalHead) {
          finalHead = currentNode;
          finalHead.next = null;
          currentTail = finalHead;
        }
        // append current node to tail.
        else {
          currentTail.next = currentNode;
          currentTail = currentNode;
          currentTail.next = null;
        }
      }
      currentNode = next.node;
    }
    return finalHead || null;
  };
})();

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const deleteDuplicates = withoutSentinel;
