import { singleNonDuplicate } from '../src/540.js';
import { generateTestName } from './util.js';

describe('540. Single Element in a Sorted Array', () => {
  [
    [[1, 1, 2, 3, 3, 4, 4, 8, 8], 2],
    [[3, 3, 7, 7, 10, 11, 11], 10],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(singleNonDuplicate, ...args), () => {
      const result = singleNonDuplicate(nums);
      expect(result).toBe(expected);
    });
  });
});
