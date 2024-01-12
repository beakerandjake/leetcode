/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

const simple = (() => {
  const compress = (arr) => arr.filter((x) => x != null);

  const indexOfMinHead = (lists) => {
    let minValue = Number.MAX_SAFE_INTEGER;
    let minIndex = 0;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].val < minValue) {
        minValue = lists[i].val;
        minIndex = i;
      }
    }
    return minIndex;
  };

  return (lists) => {
    const sentinel = { next: null };
    let sentinelTail = sentinel;
    let remaining = compress(lists);
    while (remaining.length) {
      // pull min head out of lists.
      const minIndex = indexOfMinHead(remaining);
      const minNode = remaining[minIndex];
      remaining[minIndex] = minNode.next;
      minNode.next = null;

      // push min head on to output.
      sentinelTail.next = minNode;
      sentinelTail = minNode;

      // remove any now empty lists.
      remaining = compress(remaining);
    }
    return sentinel.next;
  };
})();

const reduce = (() => {
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

  return (lists) => {
    if (!lists.length) {
      return null;
    }
    let merged = lists[0];
    for (let i = 1; i < lists.length; i++) {
      merged = merge(merged, lists[i]);
    }
    return merged;
  };
})();

const mergeSort = (() => {
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

    sentinelTail.next = aCurrent || bCurrent;

    return sentinel.next;
  };

  const doMergeSort = (lists) => {
    if (!lists.length) {
      return null;
    }
    if (lists.length === 1) {
      return lists[0];
    }
    const middle = Math.floor(lists.length / 2);
    const left = doMergeSort(lists.slice(0, middle));
    const right = doMergeSort(lists.slice(middle));
    return merge(left, right);
  };

  return doMergeSort;
})();

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
export const mergeKLists = mergeSort;
