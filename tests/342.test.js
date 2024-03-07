import { isPowerOfFour } from '../src/342.js';

describe('342. Power of Four', () => {
  [
    [16, true],
    [5, false],
    [1, true],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isPowerOfFour(input);
      expect(result).toBe(expected);
    });
  });
});
