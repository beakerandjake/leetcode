import { numSpecial } from '../src/1582.js';
import { arrToStr } from './util.js';

describe('1582. Special Positions in a Binary Matrix', () => {
  [
    [
      [
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0],
      ],
      1,
    ],
    [
      [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      3,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = numSpecial(input);
      expect(result).toBe(expected);
    });
  });
});
