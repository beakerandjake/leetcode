import { cherryPickup } from '../src/1463.js';
import { arrToStr } from './util.js';

describe('1463. Cherry Pickup II', () => {
  [
    [
      [
        [3, 1, 1],
        [2, 5, 1],
        [1, 5, 5],
        [2, 1, 1],
      ],
      24,
    ],
    [
      [
        [1, 0, 0, 0, 0, 0, 1],
        [2, 0, 0, 0, 0, 3, 0],
        [2, 0, 9, 0, 0, 0, 0],
        [0, 3, 0, 5, 4, 0, 0],
        [1, 0, 2, 3, 0, 0, 6],
      ],
      28,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = cherryPickup(input);
      expect(result).toBe(expected);
    });
  });
});
