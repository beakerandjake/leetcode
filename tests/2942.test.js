import { findWordsContaining } from '../src/2942.js';
import { arrToStr } from './util.js';

describe('2942. Find Words Containing Character', () => {
  [
    [['leet', 'code'], 'e', [0, 1]],
    [['abc', 'bcd', 'aaaa', 'cbc'], 'a', [0, 2]],
    [['abc', 'bcd', 'aaaa', 'cbc'], 'z', []],
  ].forEach(([words, x, expected]) => {
    test(`${arrToStr(words)},${x} -> ${expected}`, () => {
      const result = findWordsContaining(words, x);
      expect(result).toEqual(expected);
    });
  });
});
