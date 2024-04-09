import { findSubstring } from '../src/30.js';
import { generateTestName } from './util.js';

describe('30. Substring with Concatenation of All Words', () => {
  [
    ['barfoothefoobarman', ['foo', 'bar'], [0, 9]],
    ['wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'], []],
    ['barfoofoobarthefoobarman', ['bar', 'foo', 'the'], [6, 9, 12]],
    ['A', ['A'], [0]],
  ].forEach((args) => {
    const [s, words, expected] = args;
    test(generateTestName(findSubstring, ...args), () => {
      const result = findSubstring(s, words);
      expect(result).toEqual(expected);
    });
  });
});
