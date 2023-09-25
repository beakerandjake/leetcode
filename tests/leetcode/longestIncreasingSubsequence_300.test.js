import { lengthOfLIS } from '../../src/leetcode/longestIncreasingSubsequence_300.js';
import { arrToStr } from '../util.js';

describe('300. Longest Increasing Subsequence', () => {
  [
    [[10, 9, 2, 5, 3, 7, 101, 18], 4],
    [[7, 7, 7, 7, 7, 7, 7], 1],
    [[9, 8, 5, 2, 7, 6, 9], 3],
    [[0, 1, 0, 3, 2, 3], 4],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = lengthOfLIS(input);
      expect(result).toBe(expected);
    });
  });
});
