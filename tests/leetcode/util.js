/**
 * Converts an array to a singly linked list and returns the head node.
 */
export const arrayToLinkedList = (arr) => {
  if (arr.length <= 0) {
    return undefined;
  }
  const nodes = arr.map((x) => ({ val: x, next: null }));
  for (let i = 0; i < arr.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  return nodes[0];
};

export const linkedListToArray = (list) => {
  if (!list) {
    return [];
  }
  const toReturn = [];
  let current = list;
  while (current) {
    toReturn.push(current.val);
    current = current.next;
  }
  return toReturn;
};
