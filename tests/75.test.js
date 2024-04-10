import { sortColors } from '../src/75.js';
import { generateTestName } from './util.js';

describe('75. Sort Colors', () => {
  [
    [
      [2, 0, 2, 1, 1, 0],
      [0, 0, 1, 1, 2, 2],
    ],
    [
      [2, 0, 1],
      [0, 1, 2],
    ],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(sortColors, ...args), () => {
      const result = sortColors(nums);
      expect(result).toEqual(expected);
    });
  });
});
