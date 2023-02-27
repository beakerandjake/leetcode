export class Node {
  constructor(key, previous = null, next = null) {
    this.key = key;
    this.previous = previous;
    this.next = next;
  }
}

export class DoublyLinkedList {
  constructor(head) {
    this.head = head;
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

export const insertBefore = (list, before, toInsert) => {
  if (list.head === before) {
    list.head = toInsert;
  }

  if(before.previous) {
    before.previous.next = toInsert;
  }

  toInsert.previous = before.previous;
  toInsert.next = before;
  before.previous = toInsert;
};

// export const insertAfter = (after, toInsert) => {
//   if (after.next) {
//     after.next.previous = toInsert;
//   }
//   toInsert.next = after.next;
//   toInsert.previous = after;
//   after.next = toInsert;
// };

// export const remove = (list, toRemove) => {};

// export const listToString = (list) => {
//   let toReturn = [];
//   let current = list;
//   let index = 0;
//   while (current) {
//     toReturn.push(`[${index}]=${current.key}`);
//     current = current.next;
//     index++;
//   }
//   return toReturn.join(',');
// };
