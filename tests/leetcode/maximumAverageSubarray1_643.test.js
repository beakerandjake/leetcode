import { findMaxAverage } from '../../src/leetcode/maximumAverageSubarray1_643.js';
import { arrToStr } from '../util.js';

describe('643. Maximum Average Subarray I', () => {
  [
    [[1, 12, -5, -6, 50, 3], 4, 12.75],
    [[5], 1, 5.0],
  ].forEach(([arr, k, expected]) => {
    test(`${arrToStr(arr)}, ${k}-> ${expected}`, () => {
      const result = findMaxAverage(arr, k);
      expect(result).toBe(expected);
    });
  });
});
