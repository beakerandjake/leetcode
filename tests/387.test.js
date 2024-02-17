import { firstUniqChar } from '../src/387.js';

describe('387. First Unique Character in a String', () => {
  [
    ['leetcode', 0],
    ['loveleetcode', 2],
    ['aabb', -1],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = firstUniqChar(input);
      expect(result).toBe(expected);
    });
  });
});
