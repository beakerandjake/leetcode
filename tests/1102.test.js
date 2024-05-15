import { maximumMinimumPath } from '../src/1102.js';
import { generateTestName } from './util.js';

describe('1102. Path With Maximum Minimum Value', () => {
  [
    [
      [
        [5, 4, 5],
        [1, 2, 6],
        [7, 4, 6],
      ],
      4,
    ],
    [
      [
        [2, 2, 1, 2, 2, 2],
        [1, 2, 2, 2, 1, 2],
      ],
      2,
    ],
    [
      [
        [3, 4, 6, 3, 4],
        [0, 2, 1, 1, 7],
        [8, 8, 3, 2, 7],
        [3, 2, 4, 9, 8],
        [4, 1, 2, 0, 0],
        [4, 6, 5, 4, 3],
      ],
      3,
    ],
  ].forEach((args) => {
    const [grid, expected] = args;
    test(generateTestName(maximumMinimumPath, ...args), () => {
      const result = maximumMinimumPath(grid);
      expect(result).toBe(expected);
    });
  });
});
