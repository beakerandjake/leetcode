import { canPartition } from '../src/416.js';
import { generateTestName } from './util.js';

describe('416. Partition Equal Subset Sum', () => {
  [
    [[1, 5, 11, 5], true],
    [[1, 2, 3, 5], false],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(canPartition, ...args), () => {
      const result = canPartition(nums);
      expect(result).toBe(expected);
    });
  });
});
