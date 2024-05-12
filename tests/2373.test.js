import { largestLocal } from '../src/2373.js';
import { generateTestName } from './util.js';

describe('2373. Largest Local Values in a Matrix', () => {
  [
    [
      [
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2],
      ],
      [
        [9, 9],
        [8, 6],
      ],
    ],
    [
      [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ],
      [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ],
    ],
  ].forEach((args) => {
    const [grid, expected] = args;
    test(generateTestName(largestLocal, ...args), () => {
      const result = largestLocal(grid);
      expect(result).toEqual(expected);
    });
  });
});
