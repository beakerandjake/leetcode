import { findTargetSumWays } from '../src/leetcode/494.js';
import { arrToStr } from './util.js';

describe('494. Target Sum', () => {
  [
    [[1, 1, 1, 1, 1], 3, 5],
    [[1], 1, 1],
    [[1, 0], 1, 2],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0, 1048576],
  ].forEach(([nums, target, expected]) => {
    test(`${arrToStr(nums)},${target} -> ${expected}`, () => {
      const result = findTargetSumWays(nums, target);
      expect(result).toBe(expected);
    });
  });
});
