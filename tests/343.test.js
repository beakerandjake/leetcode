import { integerBreak } from '../src/343.js';

describe('343. Integer Break', () => {
  [
    [2, 1],
    [10, 36],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = integerBreak(input);
      expect(result).toBe(expected);
    });
  });
});
