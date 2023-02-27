export class Node {
  constructor(key, next = null) {
    this.key = key;
    this.next = next;
  }
}

export class CircularLinkedList {
  constructor(head = null) {
    this.head = head;
    if (this.head) {
      this.head.next = this.head;
    }
  }

  toString() {
    let toReturn = [];
    let current = this.head;
    let index = 0;
    do {
      toReturn.push(`[${index}]=${current.key}`);
      current = current.next;
      index++;
    } while (current !== head);

    return `head=${this.head}, items=[${toReturn.join(',')}]`;
  }
}

export const find = (list, key) => {
  let current = list.head;
  do {
    if (current.key === key) {
      return current;
    }
    current = current.next;
  } while (current != list.head);
  return null;
};

export const insertAfter = (list, after, node) => {};

export const insertBefore = (list, before, node) => {};

export const insertStart = (list, node) => {};

export const insertEnd = (list, node) => {};

export const remove = (list, node) => {};
