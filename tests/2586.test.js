import { vowelStrings } from '../src/2586.js';
import { arrToStr } from './util.js';

describe('2586. Count the Number of Vowel Strings in Range', () => {
  [
    [['are', 'amy', 'u'], 0, 2, 2],
    [['hey', 'aeo', 'mu', 'ooo', 'artro'], 1, 4, 3],
  ].forEach(([words, from, to, expected]) => {
    test(`${arrToStr(words)},${from},${to} -> ${expected}`, () => {
      const result = vowelStrings(words, from, to);
      expect(result).toBe(expected);
    });
  });
});
