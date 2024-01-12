import { findMedianSortedArrays } from '../src/leetcode/4.js';
import { arrToStr } from './util.js';

describe('4. Median of Two Sorted Arrays', () => {
  [
    [[1, 3], [2], 2],
    [[1, 2], [3, 4], 2.5],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)} -> ${expected}`, () => {
      const result = findMedianSortedArrays(a, b);
      expect(result).toBe(expected);
    });
  });
});
