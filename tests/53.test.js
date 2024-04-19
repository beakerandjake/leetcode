import { maxSubArray } from '../src/53.js';
import { generateTestName } from './util.js';

describe('53. Maximum Subarray', () => {
  [
    [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
    [[1], 1],
    [[5, 4, -1, 7, 8], 23],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(maxSubArray, ...args), () => {
      const result = maxSubArray(nums);
      expect(result).toBe(expected);
    });
  });
});
