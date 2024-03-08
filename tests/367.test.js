import { isPerfectSquare } from '../src/367.js';

describe('367. Valid Perfect Square', () => {
  [
    [16, true],
    [14, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isPerfectSquare(input);
      expect(result).toBe(expected);
    });
  });
});
