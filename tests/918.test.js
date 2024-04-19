import { maxSubarraySumCircular } from '../src/918.js';
import { generateTestName } from './util.js';

describe('918. Maximum Sum Circular Subarray', () => {
  [
    [[1, -2, 3, -2], 3],
    [[5, -3, 5], 10],
    [[-3, -2, -3], -2],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(maxSubarraySumCircular, ...args), () => {
      const result = maxSubarraySumCircular(nums);
      expect(result).toBe(expected);
    });
  });
});
