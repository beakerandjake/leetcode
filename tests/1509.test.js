import { minDifference } from '../src/1509.js';
import { generateTestName } from './util.js';

describe('1509. Minimum Difference Between Largest and Smallest Value in Three Moves', () => {
  [
    [[5, 3, 2, 4], 0],
    [[1, 5, 0, 10, 14], 1],
    [[3, 100, 20], 0],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(minDifference, ...args), () => {
      const result = minDifference(nums);
      expect(result).toBe(expected);
    });
  });
});
