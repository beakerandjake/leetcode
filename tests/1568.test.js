import { minDays } from '../src/1568.js';
import { generateTestName } from './util.js';

describe('1568. Minimum Number of Days to Disconnect Island', () => {
  [
    [
      [
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      2,
    ],
    [[[1, 1]], 2],
    [
      [
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
      ],
      1,
    ],
    [
      [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 0],
      ],
      1,
    ],
  ].forEach((args) => {
    const [grid, expected] = args;
    test(generateTestName(minDays, ...args), () => {
      const result = minDays(grid);
      expect(result).toBe(expected);
    });
  });
});
