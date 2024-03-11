import { findSmallestSetOfVertices } from '../src/1557.js';
import { arrToStr } from './util.js';

describe('1557. Minimum Number of Vertices to Reach All Nodes', () => {
  [
    [
      6,
      [
        [0, 1],
        [0, 2],
        [2, 5],
        [3, 4],
        [4, 2],
      ],
      [0, 3],
    ],
    [
      5,
      [
        [0, 1],
        [2, 1],
        [3, 1],
        [1, 4],
        [2, 4],
      ],
      [0, 2, 3],
    ],
  ].forEach(([n, edges, expected]) => {
    test(`${n},${arrToStr(edges)} -> ${expected}`, () => {
      const result = findSmallestSetOfVertices(n, edges);
      expect(result).toEqual(expected);
    });
  });
});
