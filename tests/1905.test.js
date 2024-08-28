import { countSubIslands } from '../src/1905.js';
import { generateTestName } from './util.js';

describe('1905. Count Sub Islands', () => {
  [
    [
      [
        [1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 1, 1],
      ],
      [
        [1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1],
        [0, 1, 0, 0, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0],
      ],
      3,
    ],
    [
      [
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1],
      ],
      [
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
      ],
      2,
    ],
  ].forEach((args) => {
    const [grid1, grid2, expected] = args;
    test(generateTestName(countSubIslands, ...args), () => {
      const result = countSubIslands(grid1, grid2);
      expect(result).toBe(expected);
    });
  });
});
