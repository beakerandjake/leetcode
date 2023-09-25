import { strStr } from '../../src/leetcode/28.js';

describe('28. Find the Index of the First Occurrence in a String', () => {
  [
    ['sadbutsad', 'sad', 0],
    ['leetcode', 'leeto', -1],
    ['cat', 'catty', -1],
    ['cat', 'cat', 0],
    ['hello', 'll', 2],
    ['abc', 'c', 2],
    ['mississippi', 'issi', 1],
    ['mississippi', 'pi', 9],
  ].forEach(([haystack, needle, expected]) => {
    test(`haystack: ${haystack}, needle: ${needle} -> ${expected}`, () => {
      const result = strStr(haystack, needle);
      expect(result).toBe(expected);
    });
  });
});
