import { countBits } from '../src/338.js';
import { arrToStr } from './util.js';

describe('338. Counting Bits', () => {
  [
    [2, [0, 1, 1]],
    [5, [0, 1, 1, 2, 1, 2]],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = countBits(input);
      expect(result).toEqual(expected);
    });
  });
});
