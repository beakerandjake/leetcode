export class Node {
  constructor(key, previous = null, next = null) {
    this.key = key;
    this.previous = previous;
    this.next = next;
  }
}

export class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
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
    return `head=${this.head}, tail=${this.tail}, items=[${toReturn.join(',')}]`;
  }
}

export const find = (list, key) => {
  let current = list.head;
  while (current) {
    if (current.key === key) {
      return current;
    }
    current = current.next;
  }
  return null;
};

export const insertAfter = (list, after, node) => {
  node.previous = after;

  if (!after.next) {
    node.next = null;
    list.tail = node;
  } else {
    node.next = after.next;
    after.next.previous = node;
  }

  after.next = node;
};

export const insertBefore = (list, before, node) => {
  node.next = before;

  if (!before.previous) {
    list.head = node;
  } else {
    node.previous = before.previous;
    before.previous.next = node;
  }

  before.previous = node;

  // if (list.head === before) {
  //   list.head = toInsert;
  // }

  // if (before.previous) {
  //   before.previous.next = toInsert;
  // }

  // toInsert.previous = before.previous;
  // toInsert.next = before;
  // before.previous = toInsert;
};

export const insertStart = (list, node) => {
  if (!list.head) {
    list.head = node;
    list.tail = node;
    node.previous = null;
    node.next = null;
  } else {
    insertBefore(list, list.head, node);
  }
};

export const insertEnd = (list, node) => {
  if (!list.tail) {
    list.head = node;
    list.tail = node;
    node.previous = null;
    node.next = null;
  } else {
    insertAfter(list, list.tail, node);
  }
};

export const remove = (list, node) => {
  if (!node.previous) {
    list.head = node.next;
  } else {
    node.previous.next = node.next;
  }

  if (!node.next) {
    list.tail = node.previous;
  } else {
    node.next.previous = node.previous;
  }
};
