import { sum } from '../src/2235.js';

describe('2235. Add Two Integers', () => {
  [
    [12, 5, 17],
    [1, 1, 2],
  ].forEach(([a, b, expected]) => {
    test(`${a},${b} -> ${expected}`, () => {
      const result = sum(a, b);
      expect(result).toBe(expected);
    });
  });
});
