import { detectCycle } from '../../src/leetcode/142.js';
import { arrToStr } from '../util.js';
import { arrayToLinkedList } from './util.js';

const tail = (head) => {
  let current = head;
  while (current.next) {
    current = current.next;
  }
  return current;
};

const nodeAt = (head, index, current = 0) => {
  if (index === current) {
    return head;
  }
  return nodeAt(head.next, index, current + 1);
};

const circular = (head, index) => {
  if (index !== -1) {
    tail(head).next = nodeAt(head, index);
  }
  return head;
};

describe('142. Linked List Cycle II', () => {
  [
    [[3, 2, 0, -4], 1],
    [[1, 2], 0],
    [[1], -1],
    [[], -1]
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const list = circular(arrayToLinkedList(input), expected);
      const result = detectCycle(list);
      expect(result).toBe(expected !== -1 ? nodeAt(list, expected) : null);
    });
  });
});
