import { getMaximumGold } from '../src/1219.js';
import { generateTestName } from './util.js';

describe('1219. Path with Maximum Gold', () => {
  [
    [
      [
        [0, 6, 0],
        [5, 8, 7],
        [0, 9, 0],
      ],
      24,
    ],
    [
      [
        [1, 0, 7],
        [2, 0, 6],
        [3, 4, 5],
        [0, 3, 0],
        [9, 0, 20],
      ],
      28,
    ],
  ].forEach((args) => {
    const [grid, expected] = args;
    test(generateTestName(getMaximumGold, ...args), () => {
      const result = getMaximumGold(grid);
      expect(result).toBe(expected);
    });
  });
});
