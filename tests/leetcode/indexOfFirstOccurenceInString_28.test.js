import { strStr } from '../../src/leetcode/indexOfFirstOccurenceInString_28.js';

describe('28. Find the Index of the First Occurrence in a String', () => {
  [
    ['sadbutsad', 'sad', 0],
    ['leetcode', 'leeto', -1],
  ].forEach(([needle, haystack, expected]) => {
    test(`needle: ${needle}, haystack: ${haystack} -> ${expected}`, () => {
      const result = strStr(needle, haystack);
      expect(result).toBe(expected);
    });
  });
});
