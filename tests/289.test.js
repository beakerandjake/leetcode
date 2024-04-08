import { gameOfLife } from '../src/289.js';
import { generateTestName } from './util.js';

describe('289. Game of Life', () => {
  [
    [
      [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 0, 0],
        [1, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
      ],
    ],
    [
      [
        [1, 1],
        [1, 0],
      ],
      [
        [1, 1],
        [1, 1],
      ],
    ],
  ].forEach((args) => {
    const [board, expected] = args;
    test(generateTestName(gameOfLife, ...args), () => {
      const result = gameOfLife(board);
      expect(result).toEqual(expected);
    });
  });
});
