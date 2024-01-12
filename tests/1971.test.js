import { validPath } from '../src/1971.js';
import { arrToStr } from './util.js';

describe('1971. Find if Path Exists in Graph', () => {
  [
    // replace with real test data
    [
      3,
      [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      0,
      2,
      true,
    ],
    [
      6,
      [
        [0, 1],
        [0, 2],
        [3, 5],
        [5, 4],
        [4, 3],
      ],
      0,
      5,
      false,
    ],
  ].forEach(([n, edges, src, dest, expected]) => {
    test(`${n},${arrToStr(edges)},${src},${dest}  -> ${expected}`, () => {
      const result = validPath(n, edges, src, dest);
      expect(result).toBe(expected);
    });
  });
});
