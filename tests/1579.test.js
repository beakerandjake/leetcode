import { maxNumEdgesToRemove } from '../src/1579.js';
import { generateTestName } from './util.js';

describe('1579. Remove Max Number of Edges to Keep Graph Fully Traversable', () => {
  [
    [
      4,
      [
        [3, 1, 2],
        [3, 2, 3],
        [1, 1, 3],
        [1, 2, 4],
        [1, 1, 2],
        [2, 3, 4],
      ],
      2,
    ],
    [
      4,
      [
        [3, 1, 2],
        [3, 2, 3],
        [1, 1, 4],
        [2, 1, 4],
      ],
      0,
    ],
    [
      4,
      [
        [3, 2, 3],
        [1, 1, 2],
        [2, 3, 4],
      ],
      -1,
    ],
  ].forEach((args) => {
    const [n, edges, expected] = args;
    test(generateTestName(maxNumEdgesToRemove, ...args), () => {
      const result = maxNumEdgesToRemove(n, edges);
      expect(result).toBe(expected);
    });
  });
});
