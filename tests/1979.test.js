import { findGCD } from '../src/1979.js';
import { arrToStr } from './util.js';

describe('1979. Find Greatest Common Divisor of Array', () => {
  [
    [[2, 5, 6, 9, 10], 2],
    [[7, 5, 6, 8, 3], 1],
    [[3, 3], 3],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = findGCD(input);
      expect(result).toBe(expected);
    });
  });
});
