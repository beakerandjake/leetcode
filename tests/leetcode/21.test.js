import { mergeTwoLists } from '../../src/leetcode/21.js';
import { arrToStr } from '../util.js';
import { arrayToLinkedList, linkedListToArray } from './util.js';

describe('21. Merge Two Sorted Lists', () => {
  [
    [
      [1, 2, 4],
      [1, 3, 4],
      [1, 1, 2, 3, 4, 4],
    ],
    [[], [], []],
    [[], [0], [0]],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)} -> ${arrToStr(expected)}`, () => {
      const result = mergeTwoLists(arrayToLinkedList(a), arrayToLinkedList(b));
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
