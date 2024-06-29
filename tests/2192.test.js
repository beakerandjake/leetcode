import { getAncestors } from '../src/2192.js';
import { generateTestName } from './util.js';

describe('2192. All Ancestors of a Node in a Directed Acyclic Graph', () => {
  [
    [
      8,
      [
        [0, 3],
        [0, 4],
        [1, 3],
        [2, 4],
        [2, 7],
        [3, 5],
        [3, 6],
        [3, 7],
        [4, 6],
      ],
      [[], [], [], [0, 1], [0, 2], [0, 1, 3], [0, 1, 2, 3, 4], [0, 1, 2, 3]],
    ],
    [
      5,
      [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
      ],
      [[], [0], [0, 1], [0, 1, 2], [0, 1, 2, 3]],
    ],
  ].forEach((args) => {
    const [n, edgeList, expected] = args;
    test(generateTestName(getAncestors, ...args), () => {
      const result = getAncestors(n, edgeList);
      expect(result).toEqual(expected);
    });
  });
});
