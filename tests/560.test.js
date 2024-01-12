import { subarraySum } from '../src/leetcode/560.js';
import { arrToStr } from './util.js';

describe('560. Subarray Sum Equals K', () => {
  [
    [[1, 1, 1], 2, 2],
    [[1, 2, 3], 3, 2],
    [[3, 4, 5, 7, 2, 5, 0], 7, 4],
    [[3, 4, 5, 7, 7, 7, -33, 5, 2], 7, 6],
  ].forEach(([nums, k, expected]) => {
    test(`${arrToStr(nums)},${k} -> ${expected}`, () => {
      const result = subarraySum(nums, k);
      expect(result).toBe(expected);
    });
  });
});
