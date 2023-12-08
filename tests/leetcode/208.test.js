import { Trie } from '../../src/leetcode/208.js';
import { arrToStr } from '../util.js';

describe('208. Implement Trie (Prefix Tree)', () => {
  [
    [
      ['insert', 'search', 'search', 'startsWith', 'insert', 'search'],
      [['apple'], ['apple'], ['app'], ['app'], ['app'], ['app']],
      [undefined, true, false, true, undefined, true],
    ],
  ].forEach(([fns, args, expected]) => {
    test(`${arrToStr(fns)},${arrToStr(args)} -> ${arrToStr(expected)}`, () => {
      const trie = new Trie();
      fns.forEach((fn, i) => {
        const result = trie[fn](...args[i]);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
