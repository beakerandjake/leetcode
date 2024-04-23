import { findMinHeightTrees } from '../src/310.js';
import { generateTestName } from './util.js';

describe('310. Minimum Height Trees', () => {
  [
    [
      4,
      [
        [1, 0],
        [1, 2],
        [1, 3],
      ],
      [1],
    ],
    [
      6,
      [
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 4],
        [5, 4],
      ],
      [3, 4],
    ],
  ].forEach((args) => {
    const [n, edges, expected] = args;
    test(generateTestName(findMinHeightTrees, ...args), () => {
      const result = findMinHeightTrees(n, edges);
      expect(result).toEqual(expected);
    });
  });
});
