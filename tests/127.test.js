import { ladderLength } from '../src/127.js';
import { arrToStr } from './util.js';

describe('127. Word Ladder', () => {
  [
    // replace with real test data
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'], 5],
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'], 0],
  ].forEach(([src, dest, words, expected]) => {
    test(`${src},${dest},${arrToStr(words)} -> ${expected}`, () => {
      const result = ladderLength(src, dest, words);
      expect(result).toBe(expected);
    });
  });
});
