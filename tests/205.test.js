import { isIsomorphic } from '../src/leetcode/205.js';

describe('205. Isomorphic Strings', () => {
  [
    ['egg', 'add', true],
    ['foo', 'bar', false],
    ['paper', 'title', true],
    ['badc', 'baba', false],
  ].forEach(([s, t, expected]) => {
    test(`${s},${t}-> ${expected}`, () => {
      const result = isIsomorphic(s, t);
      expect(result).toBe(expected);
    });
  });
});
