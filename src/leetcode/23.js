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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
export const mergeKLists = simple;
