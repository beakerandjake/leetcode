import {
  CircularLinkedList,
  find,
  insertEnd,
  Node,
  remove,
} from './circularLinkedList.js';

const createList = (size) =>
  [...Array(size).keys()]
    .map((x) => x + 1)
    .reduce((list, x) => {
      insertEnd(list, new Node(x));
      return list;
    }, new CircularLinkedList());

const count = (list) => {
  let toReturn = 0;

  let current = list.head;
  do {
    toReturn++;
    current = current.next;
  } while (current != list.head);

  return toReturn;
};

const kill = (list, keyToKill) => {
  let current = list.head;
  do {
    if (current.key === keyToKill) {
      remove(list, current);
      break;
    }
    current = current.next;
  } while (current != list.head);
};

/**
 * Return the position in the circle which is spared from execution.
 * @param {Number} peopleCount
 * @param {Number} skipCount
 */
export const josephusProblem = (peopleCount, skipCount) => {
  const list = createList(peopleCount);
  let current = list.head;
  let step = 1;

  while (count(list) > 1) {
    if (step === skipCount) {
      kill(list, current.key);
      step = 0;
    }
    current = current.next;
    step += 1;
  }

  return list.head.key;
};
