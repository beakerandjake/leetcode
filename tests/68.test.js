import { fullJustify } from '../src/68.js';
import { generateTestName } from './util.js';

describe('68. Text Justification', () => {
  [
    [
      ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
      16,
      ['This    is    an', 'example  of text', 'justification.  '],
    ],
    [
      ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
      16,
      ['What   must   be', 'acknowledgment  ', 'shall be        '],
    ],
  ].forEach((args) => {
    const [words, maxWidth, expected] = args;
    test(generateTestName(fullJustify, ...args), () => {
      const result = fullJustify(words, maxWidth);
      expect(result).toEqual(expected);
    });
  });
});
