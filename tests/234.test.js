import { isPalindrome } from '../src/234.js';
import { arrToList, generateTestName } from './util.js';

describe('234. Palindrome Linked List', () => {
  [
    [[1, 2, 2, 1], true],
    [[1, 2], false],
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(isPalindrome, ...args), () => {
      const result = isPalindrome(arrToList(input));
      expect(result).toBe(expected);
    });
  });
});
