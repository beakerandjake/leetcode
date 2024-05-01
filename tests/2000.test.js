import { reversePrefix } from '../src/2000.js';
import { generateTestName } from './util.js';

describe('2000. Reverse Prefix of Word', () => {
  [
    ['abcdefd', 'd', 'dcbaefd'],
    ['xyxzxe', 'z', 'zxyxxe'],
    ['abcd', 'z', 'abcd'],
  ].forEach((args) => {
    const [word, ch, expected] = args;
    test(generateTestName(reversePrefix, ...args), () => {
      const result = reversePrefix(word, ch);
      expect(result).toBe(expected);
    });
  });
});
