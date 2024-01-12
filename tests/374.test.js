import { guessNumber, setPick } from '../src/leetcode/374.js';

describe('374. Guess Number Higher or Lower', () => {
  [
    [10, 6, 6],
    [1, 1, 1],
    [2, 1, 1],
  ].forEach(([n, pick, expected]) => {
    test(`n=${n}, pick=${pick} -> ${expected}`, () => {
      setPick(pick);
      const result = guessNumber(n);
      expect(result).toBe(expected);
    });
  });
});
