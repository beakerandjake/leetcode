import { commonChars } from '../src/1002.js';
import { generateTestName } from './util.js';

describe('1002. Find Common Characters', () => {
  [
    [
      ['bella', 'label', 'roller'],
      ['e', 'l', 'l'],
    ],
    [
      ['cool', 'lock', 'cook'],
      ['c', 'o'],
    ],
  ].forEach((args) => {
    const [words, expected] = args;
    test(generateTestName(commonChars, ...args), () => {
      const result = commonChars(words);
      expect(result).toEqual(expected);
    });
  });
});
