import { maxProduct } from '../src/152.js';
import { generateTestName } from './util.js';

describe('152. Maximum Product Subarray', () => {
  [
    [[2, 3, -2, 4], 6],
    [[-2, 0, -1], 0],
    [[-2], -2],
    [[-3, 0, 1, -2], 1],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(maxProduct, ...args), () => {
      const result = maxProduct(nums);
      expect(result).toBe(expected);
    });
  });
});
