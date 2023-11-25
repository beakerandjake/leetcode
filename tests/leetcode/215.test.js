import { findKthLargest } from '../../src/leetcode/215.js';
import { arrToStr } from '../util.js';

describe('215. Kth Largest Element in an Array', () => {
  [
    // replace with real test data
    [[3, 2, 1, 5, 6, 4], 2, 5],
    [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4, 4],
  ].forEach(([input, k, expected]) => {
    test(`${arrToStr(input)},${k} -> ${expected}`, () => {
      const result = findKthLargest(input, k);
      expect(result).toBe(expected);
    });
  });
});
