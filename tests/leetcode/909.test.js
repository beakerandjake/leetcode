import { snakesAndLadders } from '../../src/leetcode/909.js';
import { arrToStr } from '../util.js';

describe('909. Snakes and Ladders', () => {
  [
    [
      [
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, 35, -1, -1, 13, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, 15, -1, -1, -1, -1],
      ],
      4,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = snakesAndLadders(input);
      expect(result).toBe(expected);
    });
  });
});
