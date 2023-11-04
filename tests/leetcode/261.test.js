import { validTree } from '../../src/leetcode/261.js';
import { arrToStr } from '../util.js';

describe('261. Graph Valid Tree', () => {
  [
    [
      5,
      [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 4],
      ],
      true,
    ],
    [
      5,
      [
        [0, 1],
        [1, 2],
        [2, 3],
        [1, 3],
        [1, 4],
      ],
      false,
    ],
    [
      7,
      [
        [0, 1],
        [0, 2],
        [0, 3],
        [4, 5],
        [4, 6],
      ],
      false,
    ],
    [
      3,
      [
        [1, 0],
        [2, 0],
      ],
      true,
    ],
    [
      10,
      [
        [5, 6],
        [0, 2],
        [1, 7],
        [5, 9],
        [1, 8],
        [3, 4],
        [0, 6],
        [0, 7],
        [0, 3],
        [8, 9],
      ],
      false,
    ],
    [
      9,
      [
        [0, 1],
        [0, 2],
        [1, 3],
        [1, 4],
        [2, 5],
        [2, 6],
        [7, 2],
        [7, 6],
      ],
      false,
    ],
  ].forEach(([n, edges, expected]) => {
    test(`${n},${arrToStr(edges)} -> ${expected}`, () => {
      const result = validTree(n, edges);
      expect(result).toBe(expected);
    });
  });
});
