import { findMin } from '../../src/leetcode/153.js';
import { arrToStr } from '../util.js';

describe('153. Find Minimum in Rotated Sorted Array', () => {
  [
    // [[1, 2, 3, 4, 5], 1],
    // [[5, 1, 2, 3, 4], 1],
    // [[4, 5, 1, 2, 3], 1],
    // [[3, 4, 5, 1, 2], 1],
    [[5, 4, 3, 2, 1], 1],
    // [[3, 4, 5, 1, 2], 1],
    // [[4, 5, 6, 7, 0, 1, 2], 0],
    // [[11, 13, 15, 17], 11],
    // [[2, 1], 1],
    // [[1], 1],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = findMin(input);
      expect(result).toBe(expected);
    });
  });
});
