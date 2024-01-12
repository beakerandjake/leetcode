import { maximumScore } from '../src/leetcode/1770.js';
import { arrToStr } from './util.js';

describe('1770. Maximum Score from Performing Multiplication Operations', () => {
  [
    [[1, 2, 3], [3, 2, 1], 14],
    [[-5, -3, -3, -2, 7, 1], [-10, -5, 3, 4, 6], 102],
  ].forEach(([nums, multipliers, expected]) => {
    test(`${arrToStr(nums)}, ${arrToStr(multipliers)} -> ${expected}`, () => {
      const result = maximumScore(nums, multipliers);
      expect(result).toBe(expected);
    });
  });
});
