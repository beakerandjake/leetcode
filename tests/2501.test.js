import { longestSquareStreak } from '../src/2501.js';
import { generateTestName } from './util.js';

describe('2501. Longest Square Streak in an Array', () => {
  [
    [[4, 3, 6, 16, 8, 2], 3],
    [[2, 3, 5, 6, 7], -1],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(longestSquareStreak, ...args), () => {
      const result = longestSquareStreak(nums);
      expect(result).toBe(expected);
    });
  });
});
