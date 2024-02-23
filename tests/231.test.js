import { isPowerOfTwo } from '../src/231.js';

describe('231. Power of Two', () => {
  [
    [1, true],
    [2, true],
    [4, true],
    [8, true],
    [16, true],
    [32, true],
    [64, true],
    [128, true],
    [256, true],
    [512, true],
    [1024, true],
    [6, false],
    [10, false],
    [5, false],
    [1073741824, true],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isPowerOfTwo(input);
      expect(result).toBe(expected);
    });
  });
});
