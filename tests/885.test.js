import { spiralMatrixIII } from '../src/885.js';
import { generateTestName } from './util.js';

describe('885. Spiral Matrix III', () => {
  [
    [
      1,
      4,
      0,
      0,
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
    ],
    [
      5,
      6,
      1,
      4,
      [
        [1, 4],
        [1, 5],
        [2, 5],
        [2, 4],
        [2, 3],
        [1, 3],
        [0, 3],
        [0, 4],
        [0, 5],
        [3, 5],
        [3, 4],
        [3, 3],
        [3, 2],
        [2, 2],
        [1, 2],
        [0, 2],
        [4, 5],
        [4, 4],
        [4, 3],
        [4, 2],
        [4, 1],
        [3, 1],
        [2, 1],
        [1, 1],
        [0, 1],
        [4, 0],
        [3, 0],
        [2, 0],
        [1, 0],
        [0, 0],
      ],
    ],
  ].forEach((args) => {
    const [rows, cols, rStart, cStart, expected] = args;
    test(generateTestName(spiralMatrixIII, ...args), () => {
      const result = spiralMatrixIII(rows, cols, rStart, cStart);
      expect(result).toEqual(expected);
    });
  });
});
