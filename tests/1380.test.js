import { luckyNumbers } from '../src/1380.js';
import { generateTestName } from './util.js';

describe('1380. Lucky Numbers in a Matrix', () => {
  [
    [
      [
        [3, 7, 8],
        [9, 11, 13],
        [15, 16, 17],
      ],
      [15],
    ],
    [
      [
        [1, 10, 4, 2],
        [9, 3, 8, 7],
        [15, 16, 17, 12],
      ],
      [12],
    ],
    [
      [
        [7, 8],
        [1, 2],
      ],
      [7],
    ],
  ].forEach((args) => {
    const [matrix, expected] = args;
    test(generateTestName(luckyNumbers, ...args), () => {
      const result = luckyNumbers(matrix);
      expect(result).toEqual(expected);
    });
  });
});
