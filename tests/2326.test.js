import { spiralMatrix } from '../src/2326.js';
import { arrToList, generateTestName } from './util.js';

describe('2326. Spiral Matrix IV', () => {
  [
    [
      3,
      5,
      [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0],
      [
        [3, 0, 2, 6, 8],
        [5, 0, -1, -1, 1],
        [5, 2, 4, 9, 7],
      ],
    ],
    [1, 4, [0, 1, 2], [[0, 1, 2, -1]]],
  ].forEach((args) => {
    const [m, n, head, expected] = args;
    test(generateTestName(spiralMatrix, ...args), () => {
      const result = spiralMatrix(m, n, arrToList(head));
      expect(result).toEqual(expected);
    });
  });
});
