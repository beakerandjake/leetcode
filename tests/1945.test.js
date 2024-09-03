import { getLucky } from '../src/1945.js';
import { generateTestName } from './util.js';

describe('1945. Sum of Digits of String After Convert', () => {
  [
    ['iiii', 1, 36],
    ['leetcode', 2, 6],
    ['zbax', 2, 8],
  ].forEach((args) => {
    const [s, k, expected] = args;
    test(generateTestName(getLucky, ...args), () => {
      const result = getLucky(s, k);
      expect(result).toBe(expected);
    });
  });
});
