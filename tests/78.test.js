import { subsets } from '../src/78.js';
import { generateTestName } from './util.js';

describe('78. Subsets', () => {
  [
    [
      [1, 2, 3],
      [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
    ],
    [[0], [[], [0]]],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(subsets, ...args), () => {
      const result = subsets(nums);
      expect(result).toEqual(expected);
    });
  });
});
