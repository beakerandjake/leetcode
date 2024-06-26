import { setZeroes } from '../src/73.js';
import { generateTestName } from './util.js';

describe('73. Set Matrix Zeroes', () => {
  [
    [
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ],
    ],
    [
      [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
      ],
      [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0],
      ],
    ],
  ].forEach((args) => {
    const [matrix, expected] = args;
    test(generateTestName(setZeroes, ...args), () => {
      setZeroes(matrix);
      expect(matrix).toIncludeSameMembers(expected);
    });
  });
});
