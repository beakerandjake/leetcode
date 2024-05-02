import { findMaxK } from '../src/2441.js';
import { generateTestName } from './util.js';

describe('2441. Largest Positive Integer That Exists With Its Negative', () => {
  [
    [[-1, 2, -3, 3], 3],
    [[-1, 10, 6, 7, -7, 1], 7],
    [[-10, 8, 6, 7, -2, -3], -1],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(findMaxK, ...args), () => {
      const result = findMaxK(nums);
      expect(result).toBe(expected);
    });
  });
});
