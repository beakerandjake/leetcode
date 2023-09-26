import { longestOnes } from '../../src/leetcode/1004.js';
import { arrToStr } from '../util.js';

describe('1004. Max Consecutive Ones III', () => {
  [
    [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2, 6],
    [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3, 10],
    [[0, 0, 1, 1, 1, 0, 0], 0, 3],
  ].forEach(([nums, k, expected]) => {
    test(`${arrToStr(nums)},${k} -> ${expected}`, () => {
      const result = longestOnes(nums, k);
      expect(result).toBe(expected);
    });
  });
});
