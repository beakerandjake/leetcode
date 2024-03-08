import { removeVowels } from '../src/1119.js';

describe('1119. Remove Vowels from String', () => {
  [
    ['leetcodeisacommunityforcoders', 'ltcdscmmntyfrcdrs'],
    ['aeiou', ''],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = removeVowels(input);
      expect(result).toBe(expected);
    });
  });
});
