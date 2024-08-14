import { smallestDistancePair } from '../src/719.js';
import { generateTestName } from './util.js';

describe('719. Find K-th Smallest Pair Distance', () => {
  [
    [[1, 3, 1], 1, 0],
    [[1, 1, 1], 2, 0],
    [[1, 6, 1], 3, 5],
    [[62, 100, 4], 2, 58],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(smallestDistancePair, ...args), () => {
      const result = smallestDistancePair(nums, k);
      expect(result).toBe(expected);
    });
  });
});
