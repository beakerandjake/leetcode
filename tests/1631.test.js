import { minimumEffortPath } from '../src/1631.js';
import { generateTestName } from './util.js';

describe('1631. Path With Minimum Effort', () => {
  [
    [
      [
        [1, 2, 2],
        [3, 8, 2],
        [5, 3, 5],
      ],
      2,
    ],
    [
      [
        [1, 2, 3],
        [3, 8, 4],
        [5, 3, 5],
      ],
      1,
    ],
    [
      [
        [1, 2, 1, 1, 1],
        [1, 2, 1, 2, 1],
        [1, 2, 1, 2, 1],
        [1, 2, 1, 2, 1],
        [1, 1, 1, 2, 1],
      ],
      0,
    ],
  ].forEach((args) => {
    const [heights, expected] = args;
    test(generateTestName(minimumEffortPath, ...args), () => {
      const result = minimumEffortPath(heights);
      expect(result).toBe(expected);
    });
  });
});
