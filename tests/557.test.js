import { reverseWords } from '../src/557.js';

describe('557. Reverse Words in a String III', () => {
  [
    ["Let's take LeetCode contest", "s'teL ekat edoCteeL tsetnoc"],
    ['cool guy', 'looc yug'],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = reverseWords(input);
      expect(result).toBe(expected);
    });
  });
});
