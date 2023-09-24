import { minDifficulty } from '../../src/leetcode/minimumDifficultyOfAJobSchedule_1335.js';
import { arrToStr } from '../util.js';

describe('1135. Minimum Difficulty of a Job Schedule', () => {
  [
    [[6, 5, 4, 3, 2, 1], 2, 7],
    [[9, 9, 9], 4, -1],
    [[1, 1, 1], 3, 3],
  ].forEach(([arr, d, expected]) => {
    test(`${arrToStr(arr)},${d} -> ${expected}`, () => {
      const result = minDifficulty(arr, d);
      expect(result).toBe(expected);
    });
  });
});
