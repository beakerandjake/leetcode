import { numMagicSquaresInside } from '../src/840.js';
import { generateTestName } from './util.js';

describe('840. Magic Squares In Grid', () => {
  [
    [
      [
        [4, 3, 8, 4],
        [9, 5, 1, 9],
        [2, 7, 6, 2],
      ],
      1,
    ],
    [[[8]], 0],
  ].forEach((args) => {
    const [grid, expected] = args;
    test(generateTestName(numMagicSquaresInside, ...args), () => {
      const result = numMagicSquaresInside(grid);
      expect(result).toBe(expected);
    });
  });
});
