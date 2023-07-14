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

/**
 * Remove duplicates from an unsorted linked list.
 */
export const removeDuplicates = (linkedList) => {
  if (!linkedList) {
    return linkedList;
  }

  if (linkedList.count <= 1) {
    return linkedList;
  }

  simple(linkedList);

  return linkedList;
};
