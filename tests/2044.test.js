import { countMaxOrSubsets } from '../src/2044.js';
import { generateTestName } from './util.js';

describe('2044. Count Number of Maximum Bitwise-OR Subsets', () => {
  [
    [[3, 1], 2],
    [[2, 2, 2], 7],
    [[3, 2, 1, 5], 6],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(countMaxOrSubsets, ...args), () => {
      const result = countMaxOrSubsets(nums);
      expect(result).toBe(expected);
    });
  });
});
