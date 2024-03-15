import { hasCycle } from '../src/141.js';
import { arrToStr, arrToList } from './util.js';

const createCycle = (arr, cycleIndex) => {
  if (cycleIndex === -1) {
    return arrToList(arr);
  }
  const head = arrToList(arr);
  let current = head;
  let cycleTarget;
  let index = 0;
  while (current.next) {
    if (index++ === cycleIndex) {
      cycleTarget = current;
    }
    current = current.next;
  }
  current.next = cycleTarget;
  return head;
};

describe('141. Linked List Cycle', () => {
  [
    [[3, 2, 0, -4], 1, true],
    [[1, 2], 0, true],
    [[1], -1, false],
  ].forEach(([input, pos, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = hasCycle(createCycle(input, pos));
      expect(result).toBe(expected);
    });
  });
});
