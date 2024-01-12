import { largestAltitude } from '../src/leetcode/1732.js';
import { arrToStr } from './util.js';

describe('1732. Find the Highest Altitude', () => {
  [
    [[-5, 1, 5, 0, -7], 1],
    [[-4, -3, -2, -1, 4, 3, 2], 0],
    [[52, -91, 72], 52],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = largestAltitude(input);
      expect(result).toBe(expected);
    });
  });
});
