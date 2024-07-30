import { frequencySort } from '../src/1636.js';
import { generateTestName } from './util.js';

describe('1636. Sort Array by Increasing Frequency', () => {
  [
    [
      [1, 1, 2, 2, 2, 3],
      [3, 1, 1, 2, 2, 2],
    ],
    [
      [2, 3, 1, 3, 2],
      [1, 3, 3, 2, 2],
    ],
    [
      [-1, 1, -6, 4, 5, -6, 1, 4, 1],
      [5, -1, 4, 4, -6, -6, 1, 1, 1],
    ],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(frequencySort, ...args), () => {
      const result = frequencySort(nums);
      expect(result).toEqual(expected);
    });
  });
});
