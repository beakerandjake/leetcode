import { maxProbability } from '../src/1514.js';
import { generateTestName } from './util.js';

describe('1514. Path with Maximum Probability', () => {
  [
    [
      3,
      [
        [0, 1],
        [1, 2],
        [0, 2],
      ],
      [0.5, 0.5, 0.2],
      0,
      2,
      0.25,
    ],
    [
      3,
      [
        [0, 1],
        [1, 2],
        [0, 2],
      ],
      [0.5, 0.5, 0.3],
      0,
      2,
      0.3,
    ],
    [3, [[0, 1]], [0.5], 0, 2, 0],
  ].forEach((args) => {
    const [n, edges, succProb, start, end, expected] = args;
    test(generateTestName(maxProbability, ...args), () => {
      const result = maxProbability(n, edges, succProb, start, end);
      expect(result).toBe(expected);
    });
  });
});
