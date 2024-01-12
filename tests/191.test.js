import { hammingWeight } from '../src/191.js';
import { binToStr } from './util.js';

describe('191. Number of 1 Bits', () => {
  [
    [0b00000000000000000000000000001011, 3],
    [0b00000000000000000000000010000000, 1],
    [0b11111111111111111111111111111101, 31],
  ].forEach(([input, expected]) => {
    test(`${binToStr(input)} -> ${expected}`, () => {
      const result = hammingWeight(input);
      expect(result).toBe(expected);
    });
  });
});
