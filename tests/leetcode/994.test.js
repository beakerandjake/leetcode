import { orangesRotting } from '../../src/leetcode/994.js';
import { arrToStr } from '../util.js';

describe('994. Rotting Oranges', () => {
  [
    [
      [
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
      ],
      4,
    ],
    [
      [
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
      ],
      -1,
    ],
    [[[0, 2]], 0],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = orangesRotting(input);
      expect(result).toBe(expected);
    });
  });
});
