import { reverseBetween } from '../../src/leetcode/92.js';
import { arrToStr } from '../util.js';
import { arrayToLinkedList, linkedListToArray } from './util.js';

describe('92. Reverse Linked List II', () => {
  [
    [[1, 2, 3, 4, 5], 2, 4, [1, 4, 3, 2, 5]],
    [[5], 1, 1, [5]],
    [[3, 5], 1, 2, [5, 3]],
  ].forEach(([input, left, right, expected]) => {
    test(`${arrToStr(input)},${left},${right} -> ${arrToStr(input)}`, () => {
      const result = reverseBetween(arrayToLinkedList(input), left, right);
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
