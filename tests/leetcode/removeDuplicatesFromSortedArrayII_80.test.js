import { removeDuplicates } from '../../src/leetcode/removeDuplicatesFromSortedArrayII_80.js';
import { arrToStr } from '../util.js';

describe('80. Remove Duplicates from Sorted Array II', () => {
  [
    [
      [1, 1, 1, 2, 2, 3],
      [1, 1, 2, 2, 3],
    ],
    [
      [0, 0, 1, 1, 1, 1, 2, 3, 3],
      [0, 0, 1, 1, 2, 3, 3],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const count = removeDuplicates(input);
      expect(count).toBe(expected.length);
      expect(input.slice(0, count)).toEqual(expected);
    });
  });
});
