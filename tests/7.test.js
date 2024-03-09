import { reverse } from '../src/7.js';
import { arrToStr } from './util.js';

describe('7. Reverse Integer', () => {
  [
    [123, 321],
    [-123, -321],
    [120, 21],
    [1111111119, 0],
    [0, 0],
    [-2147483412, -2143847412],
    [1534236469, 0],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = reverse(input);
      expect(result).toBe(expected);
    });
  });
});
