import { minSwaps } from '../src/2134.js';
import { generateTestName } from './util.js';

describe("2134. Minimum Swaps to Group All 1's Together II", () => {
  [
    [[0, 1, 0, 1, 1, 0, 0], 1],
    [[0, 1, 1, 1, 0, 0, 1, 1, 0], 2],
    [[1, 1, 0, 0, 1], 0],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(minSwaps, ...args), () => {
      const result = minSwaps(nums);
      expect(result).toBe(expected);
    });
  });
});
