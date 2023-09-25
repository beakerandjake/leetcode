import { findMaxAverage } from '../../src/leetcode/643.js';
import { arrToStr } from '../util.js';

describe('643. Maximum Average Subarray I', () => {
  [
    [[1, 12, -5, -6, 50, 3], 4, 12.75],
    [[5], 1, 5.0],
    [[7, 4, 5, 8, 8, 3, 9, 8, 7, 6], 7, 7.0],
    [[0, 0, 0, 0, 0], 5, 0],
    [[-1], 1, -1],
  ].forEach(([arr, k, expected]) => {
    test(`${arrToStr(arr)}, ${k}-> ${expected}`, () => {
      const result = findMaxAverage(arr, k);
      expect(result).toBeCloseTo(expected);
    });
  });
});
