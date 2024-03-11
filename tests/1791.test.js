import { findCenter } from '../src/1791.js';
import { arrToStr } from './util.js';

describe('1791. Find Center of Star Graph', () => {
  [
    [
      [
        [1, 2],
        [2, 3],
        [4, 2],
      ],
      2,
    ],
    [
      [
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4],
      ],
      1,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = findCenter(input);
      expect(result).toBe(expected);
    });
  });
});
