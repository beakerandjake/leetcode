import { findDuplicates } from '../src/442.js';
import { generateTestName } from './util.js';

describe('442. Find All Duplicates in an Array', () => {
  [
    [
      [4, 3, 2, 7, 8, 2, 3, 1],
      [3, 2],
    ],
    [[1, 1, 2], [1]],
    [[1], []],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(findDuplicates, ...args), () => {
      const result = findDuplicates(nums);
      expect(result).toEqual(expected);
    });
  });
});
