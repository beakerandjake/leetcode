import { uniquePathsWithObstacles } from '../src/63.js';
import { generateTestName } from './util.js';

describe('63. Unique Paths II', () => {
  [
    [
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
      2,
    ],
    [
      [
        [0, 1],
        [0, 0],
      ],
      1,
    ],
  ].forEach((args) => {
    const [obstacleGrid, expected] = args;
    test(generateTestName(uniquePathsWithObstacles, ...args), () => {
      const result = uniquePathsWithObstacles(obstacleGrid);
      expect(result).toBe(expected);
    });
  });
});
