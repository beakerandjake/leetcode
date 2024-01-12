import { searchInsert } from '../src/leetcode/35.js';
import { arrToStr } from './util.js';

describe('35. Search Insert Position', () => {
  [
    [[1, 3, 5, 6], 5, 2],
    [[1, 3, 5, 6], 2, 1],
    [[1, 3, 5, 6], 7, 4],
  ].forEach(([nums, target, expected]) => {
    test(`${arrToStr(nums)},${target} -> ${expected}`, () => {
      const result = searchInsert(nums, target);
      expect(result).toBe(expected);
    });
  });
});
