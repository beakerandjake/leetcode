import { solution } from '../../src/leetcode/278.js';

describe('278. First Bad Version', () => {
  [
    [5, 4, 4],
    [1, 1, 1],
    [5, 2, 2],
  ].forEach(([n, bad, expected]) => {
    test(`${n},${bad} -> ${expected}`, () => {
      const result = solution((x) => x >= bad)(n);
      expect(result).toBe(expected);
    });
  });
});
