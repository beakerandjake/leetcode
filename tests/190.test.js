import { reverseBits } from '../src/leetcode/190.js';
import { binToStr } from './util.js';

describe('190. Reverse Bits', () => {
  [
    [43261596, 964176192],
    [4294967293, 3221225471],
    [8, 268435456],
    [29, 3087007744],
  ].forEach(([input, expected]) => {
    test(`${binToStr(input)} -> ${binToStr(expected)}`, () => {
      const result = reverseBits(input);
      expect(result).toBe(expected);
    });
  });
});
