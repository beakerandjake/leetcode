import { longestConsecutive } from '../../src/leetcode/128.js';
import { arrToStr } from '../util.js';

describe('128. Longest Consecutive Sequence', () => {
  [
    [[100, 4, 200, 1, 3, 2], 4],
    [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1], 9],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = longestConsecutive(input);
      expect(result).toBe(expected);
    });
  });
});
