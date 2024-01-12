import { kthGrammar } from '../src/leetcode/779.js';

describe('779. K-th Symbol in Grammar', () => {
  [
    [1, 1, 0],
    [2, 1, 0],
    [2, 2, 1],
    [30, 434991989, 0],
    [3, 3, 1],
    // [4, 5, 1],
  ].forEach(([n, k, expected]) => {
    test(`${n},${k} -> ${expected}`, () => {
      const result = kthGrammar(n, k);
      expect(result).toBe(expected);
    });
  });
});
