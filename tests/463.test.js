import { islandPerimeter } from '../src/463.js';
import { generateTestName } from './util.js';

describe('463. Island Perimeter', () => {
  [
    [
      [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
      ],
      16,
    ],
    [[[1]], 4],
    [[[1, 0]], 4],
  ].forEach((args) => {
    const [grid, expected] = args;
    test(generateTestName(islandPerimeter, ...args), () => {
      const result = islandPerimeter(grid);
      expect(result).toBe(expected);
    });
  });
});
