import { countComponents } from '../src/323.js';
import { arrToStr } from './util.js';

describe('323. Number of Connected Components in an Undirected Graph', () => {
  [
    [
      5,
      [
        [0, 1],
        [1, 2],
        [3, 4],
      ],
      2,
    ],
    [
      5,
      [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
      1,
    ],
  ].forEach(([n, edges, expected]) => {
    test(`${n},${arrToStr(edges)} -> ${expected}`, () => {
      const result = countComponents(n, edges);
      expect(result).toBe(expected);
    });
  });
});
