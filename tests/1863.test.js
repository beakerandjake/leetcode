import { subsetXORSum } from '../src/1863.js';
import { generateTestName } from './util.js';

describe('1863. Sum of All Subset XOR Totals', () => {
  [
    [[1, 3], 6],
    [[5, 1, 6], 28],
    [[3, 4, 5, 6, 7, 8], 480],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(subsetXORSum, ...args), () => {
      const result = subsetXORSum(nums);
      expect(result).toBe(expected);
    });
  });
});
