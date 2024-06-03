import { beautifulSubsets } from '../src/2597.js';
import { generateTestName } from './util.js';

describe('2597. The Number of Beautiful Subsets', () => {
  [
    [[2, 4, 6], 2, 4],
    [[1], 1, 1],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(beautifulSubsets, ...args), () => {
      const result = beautifulSubsets(nums, k);
      expect(result).toBe(expected);
    });
  });
});
