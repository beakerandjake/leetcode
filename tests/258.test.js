import { addDigits } from '../src/258.js';

describe('258. Add Digits', () => {
  [
    [38, 2],
    [0, 0],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = addDigits(input);
      expect(result).toBe(expected);
    });
  });
});
