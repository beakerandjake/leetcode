import { minimumOperations } from '../src/3190.js';
import { generateTestName } from './util.js';

describe('3190. Find Minimum Operations to Make All Elements Divisible by Three', () => {
  [
    [[1, 2, 3, 4], 3],
    [[3, 6, 9], 0],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(minimumOperations, ...args), () => {
      const result = minimumOperations(nums);
      expect(result).toBe(expected);
    });
  });
});
