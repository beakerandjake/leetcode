import { asteroidCollision } from '../src/735.js';
import { arrToStr } from './util.js';

describe('735. Asteroid Collision', () => {
  [
    [
      [5, 10, -5],
      [5, 10],
    ],
    [[8, -8], []],
    [[10, 2, -5], [10]],
    [
      [-2, -1, 1, 2],
      [-2, -1, 1, 2],
    ],
    [
      [-2, -2, 1, -2],
      [-2, -2, -2],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = asteroidCollision(input);
      expect(result).toEqual(expected);
    });
  });
});
