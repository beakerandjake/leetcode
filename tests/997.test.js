import { findJudge } from '../src/997.js';
import { arrToStr } from './util.js';

describe('997. Find the Town Judge', () => {
  [
    [2, [[1, 2]], 2],
    [
      3,
      [
        [1, 3],
        [2, 3],
      ],
      3,
    ],
    [
      3,
      [
        [1, 3],
        [2, 3],
        [3, 1],
      ],
      -1,
    ],
  ].forEach(([n, trust, expected]) => {
    test(`${n},${arrToStr(trust)} -> ${expected}`, () => {
      const result = findJudge(n, trust);
      expect(result).toBe(expected);
    });
  });
});
