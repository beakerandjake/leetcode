import { findUnsortedSubarray } from '../src/leetcode/581.js';
import { arrToStr } from './util.js';

describe('581. Shortest Unsorted Continuous Subarray', () => {
  [
    [[2, 6, 4, 8, 10, 9, 15], 5],
    [[1, 2, 3, 4], 0],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = findUnsortedSubarray(input);
      expect(result).toBe(expected);
    });
  });
});
