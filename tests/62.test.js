import { uniquePaths } from '../src/62.js';

describe('62. Unique Paths', () => {
  [
    [3, 7, 28],
    [3, 2, 3],
  ].forEach(([m, n, expected]) => {
    test(`${m},${n} -> ${expected}`, () => {
      const result = uniquePaths(m, n);
      expect(result).toBe(expected);
    });
  });
});
