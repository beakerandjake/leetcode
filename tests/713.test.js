import { numSubarrayProductLessThanK } from '../src/713.js';
import { generateTestName } from './util.js';

describe('713. Subarray Product Less Than K', () => {
  [
    [[10, 5, 2, 6], 100, 8],
    [[1, 2, 3], 0, 0],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(numSubarrayProductLessThanK, ...args), () => {
      const result = numSubarrayProductLessThanK(nums, k);
      expect(result).toBe(expected);
    });
  });
});
