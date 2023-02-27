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
    } while (current !== this.head);

    return `head=${this.head.key}, items=[${toReturn.join(',')}]`;
  }
}

const getTail = (list) => {
  if (!list.head) {
    return null;
  }
  let current = list.head;
  while (current.next !== list.head) {
    current = current.next;
  }
  return current;
};

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

export const insertAfter = (list, after, node) => {
  if (list.head === after) {
    let tail = getTail(list);
    tail.next = node;
    list.head = node;
  }

  node.next = after.next;
  after.next = node;
};

export const insertBefore = (list, before, node) => {
  if (list.head === before) {
    let tail = getTail(list);
    tail.next = node;
    list.head = node;
  } else {
    let previous = list.head;
    while (previous.next != before) {
      previous = previous.next;
    }
    previous.next = node;
  }

  node.next = before;
};

export const insertStart = (list, node) => {
  if (!list.head) {
    list.head = node;
    node.next = node;
  } else {
    insertBefore(list, list.head, node);
  }
};

export const insertEnd = (list, node) => {
  if (!list.head) {
    list.head = node;
    list.head.next = node;
  } else {
    insertAfter(list, getTail(list), node);
  }
};

export const remove = (list, node) => {
  if (list.head === node) {
    let tail = getTail(list);
    tail.next = node.next;
    list.head = node.next;
  } else {
    let previous = list.head;
    while (previous.next !== node && previous.next != list.head) {
      previous = previous.next;
    }
    previous.next = node.next;
  }
};
