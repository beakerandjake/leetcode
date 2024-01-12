import { earliestAcq } from '../src/leetcode/1101.js';
import { arrToStr } from './util.js';

describe('1101. The Earliest Moment When Everyone Become Friends', () => {
  [
    [
      [
        [20190101, 0, 1],
        [20190104, 3, 4],
        [20190107, 2, 3],
        [20190211, 1, 5],
        [20190224, 2, 4],
        [20190301, 0, 3],
        [20190312, 1, 2],
        [20190322, 4, 5],
      ],
      6,
      20190301,
    ],
    [
      [
        [0, 2, 0],
        [1, 0, 1],
        [3, 0, 3],
        [4, 1, 2],
        [7, 3, 1],
      ],
      4,
      3,
    ],
    [
      [
        [9, 0, 3],
        [0, 2, 7],
        [12, 3, 1],
        [5, 5, 2],
        [3, 4, 5],
        [1, 5, 0],
        [6, 2, 4],
        [2, 5, 3],
        [7, 7, 3],
      ],
      8,
      -1,
    ],
  ].forEach(([logs, n, expected]) => {
    test(`${n},${arrToStr(logs)} -> ${expected}`, () => {
      const result = earliestAcq(logs, n);
      expect(result).toBe(expected);
    });
  });
});
