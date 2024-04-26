import { minFallingPathSum } from '../src/1289.js';
import { generateTestName } from './util.js';

describe('1289. Minimum Falling Path Sum II', () => {
  [
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      13,
    ],
    [[[7]], 7],
  ].forEach((args) => {
    const [grid, expected] = args;
    test(generateTestName(minFallingPathSum, ...args), () => {
      const result = minFallingPathSum(grid);
      expect(result).toBe(expected);
    });
  });
});
