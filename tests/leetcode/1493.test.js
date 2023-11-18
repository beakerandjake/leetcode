import { longestSubarray } from '../../src/leetcode/1493.js';
import { arrToStr } from '../util.js';

describe("1493. Longest Subarray of 1's After Deleting One Element", () => {
  [
    [[1, 1, 0, 1], 3],
    [[0, 1, 1, 1, 0, 1, 1, 0, 1], 5],
    [[1, 1, 1], 2],
    [[1, 1, 0, 0, 1, 1, 1, 0, 1], 4],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = longestSubarray(input);
      expect(result).toBe(expected);
    });
  });
});
