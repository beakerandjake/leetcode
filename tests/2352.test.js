import { equalPairs } from '../src/leetcode/2352.js';
import { arrToStr } from './util.js';

describe('2352. Equal Row and Column Pairs', () => {
  [
    [
      [
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
      ],
      1,
    ],
    [
      [
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
      ],
      3,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = equalPairs(input);
      expect(result).toBe(expected);
    });
  });
});
