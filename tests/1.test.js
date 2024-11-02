import { twoSum } from '../src/1.js';
import { generateTestName } from './util.js';

describe('1. Two Sum', () => {
  [
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
  ].forEach((args) => {
    const [nums, target, expected] = args;
    test(generateTestName(twoSum, ...args), () => {
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });
  });
});
