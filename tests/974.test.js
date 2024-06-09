import { subarraysDivByK } from '../src/974.js';
import { generateTestName } from './util.js';

describe('974. Subarray Sums Divisible by K', () => {
  [
    [[4, 5, 0, -2, -3, 1], 5, 7],
    [[5], 9, 0],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(subarraysDivByK, ...args), () => {
      const result = subarraysDivByK(nums, k);
      expect(result).toBe(expected);
    });
  });
});
