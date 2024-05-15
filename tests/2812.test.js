import { maximumSafenessFactor } from '../src/2812.js';
import { generateTestName } from './util.js';

describe('2812. Find the Safest Path in a Grid', () => {
  [
    [
      [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 1],
      ],
      0,
    ],
    [
      [
        [0, 0, 1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      2,
    ],
    [
      [
        [0, 0, 0, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0],
      ],
      2,
    ],
  ].forEach((args) => {
    const [grid, expected] = args;
    test(generateTestName(maximumSafenessFactor, ...args), () => {
      const result = maximumSafenessFactor(grid);
      expect(result).toBe(expected);
    });
  });
});
