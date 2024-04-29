import { minOperations } from '../src/2997.js';
import { generateTestName } from './util.js';

describe('2997. Minimum Number of Operations to Make Array XOR Equal to K', () => {
  [
    [[2, 1, 3, 4], 1, 2],
    [[2, 0, 2, 0], 0, 0],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(minOperations, ...args), () => {
      const result = minOperations(nums, k);
      expect(result).toBe(expected);
    });
  });
});
