import { maxProbability } from '../src/1514.js';
import { generateTestName } from './util.js';

describe('1514. Path with Maximum Probability', () => {
  [
    // [
    //   3,
    //   [
    //     [0, 1],
    //     [1, 2],
    //     [0, 2],
    //   ],
    //   [0.5, 0.5, 0.2],
    //   0,
    //   2,
    //   0.25,
    // ],
    // [
    //   3,
    //   [
    //     [0, 1],
    //     [1, 2],
    //     [0, 2],
    //   ],
    //   [0.5, 0.5, 0.3],
    //   0,
    //   2,
    //   0.3,
    // ],
    // [3, [[0, 1]], [0.5], 0, 2, 0],
    [
      5,
      [
        [1, 4],
        [2, 4],
        [0, 4],
        [0, 3],
        [0, 2],
        [2, 3],
      ],
      [0.37, 0.17, 0.93, 0.23, 0.39, 0.04],
      3,
      4,
      0.2139,
    ],
  ].forEach((args) => {
    const [n, edges, succProb, start, end, expected] = args;
    test(generateTestName(maxProbability, ...args), () => {
      const result = maxProbability(n, edges, succProb, start, end);
      expect(result).toBe(expected);
    });
  });
});
