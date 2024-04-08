import { findDuplicate } from '../src/287.js';
import { generateTestName } from './util.js';

describe('287. Find the Duplicate Number', () => {
  [
    [[1, 3, 4, 2, 2], 2],
    [[3, 1, 3, 4, 2], 3],
    [[3, 3, 3, 3, 3], 3],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(findDuplicate, ...args), () => {
      const result = findDuplicate(nums);
      expect(result).toBe(expected);
    });
  });
});
