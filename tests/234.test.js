import { isPalindrome } from '../src/234.js';
import { arrToStr, arrayToLinkedList } from './util.js';

describe('234. Palindrome Linked List', () => {
  [
    [[1, 2, 2, 1], true],
    [[1, 2, 3, 4], false],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = isPalindrome(arrayToLinkedList(input));
      expect(result).toBe(expected);
    });
  });
});
