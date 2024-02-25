import { isPowerOfThree } from '../src/326.js';

describe('326. Power of Three', () => {
  [
    [27, true],
    [0, false],
    [-1, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isPowerOfThree(input);
      expect(result).toBe(expected);
    });
  });
});
