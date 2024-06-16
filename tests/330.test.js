import { minPatches } from '../src/330.js';
import { generateTestName } from './util.js';

describe('330. Patching Array', () => {
  [
    [[1, 3], 6, 1],
    [[1, 5, 10], 20, 2],
    [[1, 2, 2], 5, 0],
  ].forEach((args) => {
    const [nums, n, expected] = args;
    test(generateTestName(minPatches, ...args), () => {
      const result = minPatches(nums, n);
      expect(result).toBe(expected);
    });
  });
});
