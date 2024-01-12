import { deleteDuplicates } from '../src/leetcode/82.js';
import { arrToStr } from './util.js';
import { arrayToLinkedList, linkedListToArray } from './leetcode/util.js';

describe('82. Remove Duplicates from Sorted List II', () => {
  [
    [
      [1, 2, 3, 3, 4, 4, 5],
      [1, 2, 5],
    ],
    [
      [1, 2, 3, 4, 4, 4, 4, 4],
      [1, 2, 3],
    ],
    [
      [1, 1, 1, 2, 3],
      [2, 3],
    ],
    [[1, 2, 2], [1]],
    [[1, 1, 1, 1, 1, 5], [5]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = deleteDuplicates(arrayToLinkedList(input));
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
