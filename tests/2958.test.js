import { maxSubarrayLength } from '../src/2958.js';
import { generateTestName } from './util.js';

describe('2958. Length of Longest Subarray With at Most K Frequency', () => {
  [
    [[1, 2, 3, 1, 2, 3, 1, 2], 2, 6],
    [[1, 2, 1, 2, 1, 2, 1, 2], 1, 2],
    [[5, 5, 5, 5, 5, 5, 5], 4, 4],
    [[2, 2, 3], 1, 2],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(maxSubarrayLength, ...args), () => {
      const result = maxSubarrayLength(nums, k);
      expect(result).toBe(expected);
    });
  });
});
