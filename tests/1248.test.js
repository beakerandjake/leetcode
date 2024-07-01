import { numberOfSubarrays } from '../src/1248.js';
import { generateTestName } from './util.js';

describe('1248. Count Number of Nice Subarrays', () => {
  [
    [[1, 1, 2, 1, 1], 3, 2],
    [[2, 4, 6], 1, 0],
    [[2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2, 16],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(numberOfSubarrays, ...args), () => {
      const result = numberOfSubarrays(nums, k);
      expect(result).toBe(expected);
    });
  });
});
