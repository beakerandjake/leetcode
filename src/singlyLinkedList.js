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

export const insertAfter = (list, after, node) => {};

export const insertBefore = (list, before, node) => {};

export const insertStart = (list, node) => {};

export const insertEnd = (list, node) => {};

export const remove = (list, node) => {};
