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

export const arrayToBinaryTree = (arr) => {
  if (!arr?.length) {
    return undefined;
  }
  const nodes = arr.map((x) => (x === null ? null : { val: x, left: null, right: null }));
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] == null) {
      continue;
    }
    nodes[i].left = nodes[2 * i + 1] || null;
    nodes[i].right = nodes[2 * i + 2] || null;
  }
  return nodes[0];
};
