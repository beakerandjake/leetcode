import { removeDuplicates } from '../src/leetcode/26.js';
import { arrToStr } from './util.js';

describe('26. Remove Duplicates from Sorted Array', () => {
  [
    [
      [1, 1, 2],
      [1, 2],
    ],
    [
      [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      [0, 1, 2, 3, 4],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const count = removeDuplicates(input);
      expect(count).toBe(expected.length);
      expect(input.slice(0, count)).toEqual(expected);
    });
  });
});
