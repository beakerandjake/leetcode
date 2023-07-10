export class Node {
  constructor(key, next = null) {
    this.key = key;
    this.next = next;
  }
}

export class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  toString() {
    let toReturn = [];
    let current = this.head;
    let index = 0;
    while (current) {
      toReturn.push(`[${index}]=${current.key}`);
      current = current.next;
      index++;
    }
    return `head=${this.head}, items=[${toReturn.join(',')}]`;
  }
}

export const find = (list, key) => {
  let current = list.head;
  while (current && current.key !== key) {
    current = current.next;
  }
  return current;
};

export const insertAfter = (list, after, node) => {
  node.next = after.next;
  after.next = node;
};

export const insertBefore = (list, before, node) => {
  if (list.head === before) {
    list.head = node;
    node.next = before;
    return;
  }

  let current = list.head;

  while (current.next !== before) {
    current = current.next;
  }

  current.next = node;
  node.next = before;
};

export const insertStart = (list, node) => {
  if (!list.head) {
    list.head = node;
  } else {
    insertBefore(list, list.head, node);
  }
};

export const insertEnd = (list, node) => {
  if (!list.head) {
    list.head = node;
    return;
  }

  let tail = list.head;
  while (tail.next) {
    tail = tail.next;
  }

  insertAfter(list, tail, node);
};

export const remove = (list, node) => {
  if (list.head === node) {
    list.head = node.next;
    return;
  }

  let current = list.head;
  while (current.next !== node) {
    current = current.next;
  }

  current.next = node.next;
};
