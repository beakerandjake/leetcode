import { sortArray } from '../src/912.js';
import { generateTestName } from './util.js';

describe('912. Sort an Array', () => {
  [
    [
      [5, 2, 3, 1],
      [1, 2, 3, 5],
    ],
    [
      [5, 1, 1, 2, 0, 0],
      [0, 0, 1, 1, 2, 5],
    ],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(sortArray, ...args), () => {
      const result = sortArray(nums);
      expect(result).toEqual(expected);
    });
  });
});
