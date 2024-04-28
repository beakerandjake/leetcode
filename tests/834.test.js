import { sumOfDistancesInTree } from '../src/834.js';
import { generateTestName } from './util.js';

describe('834. Sum of Distances in Tree', () => {
  [
    [
      6,
      [
        [0, 1],
        [0, 2],
        [2, 3],
        [2, 4],
        [2, 5],
      ],
      [8, 12, 6, 10, 10, 10],
    ],
    [1, [], [0]],
    [2, [[1, 0]], [1, 1]],
  ].forEach((args) => {
    const [n, edges, expected] = args;
    test(generateTestName(sumOfDistancesInTree, ...args), () => {
      const result = sumOfDistancesInTree(n, edges);
      expect(result).toEqual(expected);
    });
  });
});
