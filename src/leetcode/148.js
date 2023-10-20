/**
 * Given the head of a linked list, return the list after sorting it in ascending order.
 */

const findMiddle = (head) => {
  let parent;
  let slow = head;
  let fast = head;
  while (fast?.next) {
    parent = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  return { parent, node: slow };
};

const merge = (a, b) => {
  const sentinel = { next: null };
  let sentinelTail = sentinel;
  let aCurrent = a;
  let bCurrent = b;
  while (aCurrent && bCurrent) {
    if (aCurrent.val < bCurrent.val) {
      const aNext = aCurrent.next;
      aCurrent.next = null;
      sentinelTail.next = aCurrent;
      aCurrent = aNext;
    } else {
      const bNext = bCurrent.next;
      bCurrent.next = null;
      sentinelTail.next = bCurrent;
      bCurrent = bNext;
    }
    sentinelTail = sentinelTail.next;
  }
  if (aCurrent) {
    sentinelTail.next = aCurrent;
  }
  if (bCurrent) {
    sentinelTail.next = bCurrent;
  }
  return sentinel.next;
};

const mergeSort = (head) => {
  if (!head || !head.next) {
    return head;
  }

  const middle = findMiddle(head);
  middle.parent.next = null;

  const leftSorted = mergeSort(head);
  const rightSorted = mergeSort(middle.node);
  return merge(leftSorted, rightSorted);
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const sortList = (head) => mergeSort(head);
