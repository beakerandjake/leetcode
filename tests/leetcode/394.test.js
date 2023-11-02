import { decodeString } from '../../src/leetcode/394.js';

describe('394. Decode String', () => {
  [
    ['3[a]2[bc]', 'aaabcbc'],
    ['3[a2[c]]', 'accaccacc'],
    ['2[abc]3[cd]ef', 'abcabccdcdcdef'],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = decodeString(input);
      expect(result).toBe(expected);
    });
  });
});
