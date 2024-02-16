import { minWindow } from '../src/76.js';

describe('76. Minimum Window Substring', () => {
  [
    ['ADOBECODEBANC', 'ABC', 'BANC'],
    ['a', 'a', 'a'],
    ['a', 'aa', ''],
    ['ab', 'a', 'a'],
  ].forEach(([s, t, expected]) => {
    test(`${s},${t} -> ${expected}`, () => {
      const result = minWindow(s, t);
      expect(result).toBe(expected);
    });
  });
});
