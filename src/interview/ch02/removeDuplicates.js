const simple = (linkedList) => {
  const deleteDuplicates = (node) => {
    let prev = node;
    let current = node.next;
    while (current) {
      if (current.value === node.value) {
        prev.next = current.next;
      } else {
        prev = current;
      }
      current = current.next;
    }
  };

  let current = linkedList.head;
  while (current) {
    deleteDuplicates(current);
    current = current.next;
  }
};

const withLookup = (linkedList) => {
  const encountered = new Set();
  let previous;
  let current = linkedList.head;

  while (current) {
    // first time we're seeing this value.
    if (!encountered.has(current.value)) {
      encountered.add(current.value);
      previous = current;
      current = current.next;
    } else {
      // it's a duplicate, remove it.
      previous.next = current.next;
      current = current.next;
    }
  }
};

/**
 * Remove duplicates from an unsorted linked list.
 */
export const removeDuplicates = (linkedList) => {
  if (!linkedList || linkedList.count <= 1) {
    return linkedList;
  }

  withLookup(linkedList);

  return linkedList;
};
