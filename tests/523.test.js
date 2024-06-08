import { checkSubarraySum } from '../src/523.js';
import { generateTestName } from './util.js';

describe('523. Continuous Subarray Sum', () => {
  [
    [[23, 2, 4, 6, 7], 6, true],
    [[23, 2, 6, 4, 7], 6, true],
    [[23, 2, 6, 4, 7], 13, false],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(checkSubarraySum, ...args), () => {
      const result = checkSubarraySum(nums, k);
      expect(result).toBe(expected);
    });
  });
});
